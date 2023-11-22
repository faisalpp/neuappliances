const Coupon = require('../models/coupon');
const Cart = require('../models/cart');
const JWTService = require('../services/JwtService');
const Joi = require("joi");

const couponController = {
  async createCoupon(req, res, next) {
    const couponSchema = Joi.object({
        code: Joi.string().required(),
        description: Joi.string().allow('').allow(null),
        type: Joi.string().required(),
        amount: Joi.string().allow('').allow(null),
        expiry: Joi.string().required(), 
        maxCount: Joi.string().required(), 
        min: Joi.string().allow('').allow(null), 
        max: Joi.string().allow('').allow(null), 
        singleUse: Joi.boolean().required(), 
        excSale: Joi.boolean().required(), 
      });
      const { error } = couponSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }
  
      
      const { code,description,type,amount, expiry, min, max, singleUse, excSale,maxCount } = req.body;

      const isFreeShipping = amount?.length > 0 ? false : true;
      const isMin = min?.length > 0 ? true : false;
      const isMax = max?.length > 0 ? true : false;
      
      const expiryDate = new Date(expiry);
      const expiryTimestamp = Math.floor(expiryDate.getTime() / 1000);


      const couponToken = JWTService.signAccessToken({ code:code  }, expiryTimestamp);
      const AMOUNT = amount.length > 0 ? amount : 0;
      // try{
       const newCoupon = new Coupon({code:code,description:description,type:type,amount:Number(AMOUNT), expiry:{token:couponToken,date:expiry},min:{isMin:isMin,amount:parseInt(min)},max:{isMin:isMax,amount:parseInt(max)},singleUse:singleUse,excSale:excSale,isFreeShipping:isFreeShipping,maxCount:parseInt(maxCount)})
       await newCoupon.save()
       return res.status(200).json({status:200,msg:'Coupon Created Successfully!'})
      // }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
  },

  async getCoupons(req, res, next) {
   try{
    const coupons = await Coupon.find({})
    return res.status(200).json({status:200,coupons:coupons})
   }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
  },

  async deleteCoupon(req, res, next) {
   try{
    await Coupon.findOneAndDelete({_id:req.body.cid})
    return res.status(200).json({status:200,msg:'Coupon Deleted Successfully!'})
   }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
  },

  async applyCoupon(req, res, next) {
    const couponSchema = Joi.object({
      code: Joi.string().required(),
      cartId: Joi.string().required(),
    });
    const { error } = couponSchema.validate(req.body);

    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    
    const { code,cartId } = req.body;


   const getCoupon = await Coupon.findOne({code:code})
   if(getCoupon){
    try{
     await JWTService.verifyAccessToken(getCoupon.expiry.token).code
    }catch(error){
     try{
       await Coupon.findOneAndDelete({code:code})
     }catch(error){return res.status(500).json({status:500,message:'Code Expired!'})}
    }

    const getCart = await Cart.findOne({_id:cartId})
    if(!getCart){
      return res.status(404).json({status:404,message:'Cart Not Found!'})  
    }

    let subTotal = getCart.subTotal;
    let grandTotal = getCart.grandTotal;
    let coupon;
    // 1.1. Check Coupon Count (Max Count)
    const findDup = getCart.coupons?.filter((item)=> item.code === code)
    if(findDup?.length >= getCoupon.maxCount ){
      return res.status(500).json({status:500,message:`Coupon is Valid For ${getCoupon.maxCount} Times Only!`})
    }
    // 1.2. Check Individual Use Only
    if(getCoupon.singleUse && getCart.coupons?.length > 0){
      return res.status(500).json({status:500,message:'Coupon is Valid For Single Use Only!'})
    }
    // 2. check minimum and maximum amount spend on cart subTotal if no min and max continue to
    //  next step else check for min and max and if success then continue else show error
    if(getCoupon.min.isMin){
      if(subTotal < getCoupon.min.amount){
        return res.status(500).json({status:500,message:`Coupon Required Minimum $${getCoupon.min.amount} in Cart SubTotal!`})
      }
    }
    if(getCoupon.max.isMax){
      if(subTotal > getCoupon.max.amount){
        return res.status(500).json({status:500,message:`Coupon Required Maximum $${getCoupon.max.amount} in Cart SubTotal!`})
      }
    }
    // 3. then check if excSale is true then check cart sale products if sale products present then show
    // Error else continue to next step
    let CART_PRODUCTS = getCart.products;
    if(getCoupon.excSale){
     for(let i=0;i<CART_PRODUCTS.length;i++){
      if(CART_PRODUCTS.isSale){
        return res.status(500).json({status:500,message:'Coupon is Not Valid for Sale Products!'})
      }
     }
    }

    // 4. check coupon type if coupon is type percentage calculate percentage else if type is flat discount then just
    // normally minus the subtotal from coupon amount else the coupon is free then we can add isFreeShipping in coupon object.
    if(getCoupon.type === 'free-shipping'){
      const grandTotal = getCart.subTotal + getCart.tax;
      const cart = await Cart.findOneAndUpdate(
       {_id:cartId},
        { 
          $push: {
            coupons: {
              $each: [{
                code: getCoupon.code,
                description: getCoupon.description,
                type: getCoupon.type,
                amount: getCoupon.amount,
                maxCount: getCoupon.maxCount,
                isFreeShipping: getCoupon.isFreeShipping,
                min: getCoupon.min,
                max: getCoupon.max,
                previous: getCart.orderInfo,
                singleUse: getCoupon.singleUse,
                excSale: getCoupon.excSale,
              }],
              $position: 0
            }
          },
          orderInfo: {...getCart.orderInfo,shipping:'Free'},
          grandTotal: grandTotal    
        },
        );
      return res.status(200).json({status:200,cart:cart,msg:'Coupon Code Applied!'})        
    }else if(getCoupon.type === 'percentage-discount'){
      coupon = ((getCoupon.amount / 100) * subTotal)
      subTotal = subTotal - coupon;
      if(getCart.orderInfo.type === 'pickup'){
        grandTotal = subTotal + getCart.tax;
      }else{
        grandTotal = subTotal + getCart.orderInfo.shipping + getCart.tax;
      }
    }else{
      coupon = getCoupon.amount;
      subTotal = subTotal - coupon;
      if(getCart.orderInfo.type === 'pickup'){
        grandTotal = subTotal + getCart.tax;
      }else{
        grandTotal = subTotal + getCart.orderInfo.shipping + getCart.tax;
      }
    }
    
    try{
     const UPDATED_CART = await Cart.findOneAndUpdate(
      {_id:cartId},
       { 
         $push: {
           coupons: {
             $each: [{
               code: getCoupon.code,
               description: getCoupon.description,
               type: getCoupon.type,
               amount: getCoupon.amount,
               maxCount: getCoupon.maxCount,
               isFreeShipping: getCoupon.isFreeShipping,
               min: getCoupon.min,
               max: getCoupon.max,
               previous:{amount:coupon},
               singleUse: getCoupon.singleUse,
               excSale: getCoupon.excSale,
             }],
             $position: 0
           }
         },
         subTotal:subTotal,
         grandTotal:grandTotal
       },{new:true}
       );
     return res.status(200).json({status:200,cart:UPDATED_CART,msg:'Coupon Code Applied!'})        
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

   }else{
    return res.status(404).json({status:404,message:'Invalid Code!'})
   }
  },

  async removeCoupon(req, res, next) {
    const couponSchema = Joi.object({
      coupon: Joi.object().required(),
      cartId: Joi.string().required(),
    });
    const { error } = couponSchema.validate(req.body);

    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    
    const { coupon,cartId } = req.body;

    const getCart = await Cart.findOne({_id:cartId})
    if(!getCart){
      return res.status(404).json({status:404,message:'Cart Not Found!'})  
    }
    // 4. check coupon type if coupon is type percentage calculate percentage else if type is flat discount then just
    // normally minus the subtotal from coupon amount else the coupon is free then we can add isFreeShipping in coupon object.
    if(coupon.type === 'free-shipping'){
      const shipping = coupon.shipping
      const grandTotal = getCart.grandTotal + shipping
      try{
      const cart = await Cart.findOneAndUpdate(
        { _id: cartId }, // Match the cart based on its _id
        { $pull: { coupons: { _id: coupon._id } },
        orderInfo:coupon.previous,
        grandTotal:grandTotal.toFixed(2)
      },{new:true}
      );
      return res.status(200).json({status:200,cart:cart,msg:'Coupon Code Applied!'})        
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

    }else if(coupon.type === 'percentage-discount'){
     
     const subTotal1 = getCart.subTotal + coupon.previous.amount;
     if(getCart.orderInfo.type === 'pickup'){
       grandTotal1 = subTotal1 + getCart.tax;
      }else{
       grandTotal1 = subTotal1 + getCart.orderInfo.shipping + getCart.tax;
     }
         try{
     const UPDATED_CART = await Cart.findOneAndUpdate(
       { _id: cartId }, // Match the cart based on its _id
       { $pull: { coupons: { _id: coupon._id } },
       subTotal:subTotal1,
       grandTotal:grandTotal1
      },{new:true}
     );
      return res.status(200).json({status:200,cart:UPDATED_CART,msg:'Coupon Code Applied!'})        
     }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    }else{
     const subTotal2 = getCart.subTotal + coupon.amount
     if(getCart.orderInfo.type === 'pickup'){
       grandTotal2 = subTotal2 + getCart.tax;
      }else{
       grandTotal2 = subTotal2 + getCart.orderInfo.shipping + getCart.tax;
      }
     try{
     const UPDATED_CART = await Cart.findOneAndUpdate(
      { _id: cartId }, // Match the cart based on its _id
      { $pull: { coupons: { _id: coupon._id } },
      subTotal:subTotal2,
      grandTotal:grandTotal2
     },{new:true}
    );
     return res.status(200).json({status:200,cart:UPDATED_CART,msg:'Coupon Code Applied!'})        
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

    }

  },

  async CheckCoupon(req, res, next) {
    const couponSchema = Joi.object({
      code: Joi.string().required(),
    });
    const { error } = couponSchema.validate(req.body);

    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    
    const { code} = req.body;

    const COUPON = await Coupon.findOne({code:code})
    if(COUPON){
      return res.status(200).json({status:200,coupon:COUPON})      
    }else{
      return res.status(404).json({status:404})      
    }

  },



}

module.exports = couponController
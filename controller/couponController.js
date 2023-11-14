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
  
      
      const { code,description,type,amount, expiry, min, max, singleUse, excSale } = req.body;

      const isFreeShipping = amount?.length > 0 ? true : false;
      const isMin = min?.length > 0 ? true : false;
      const isMax = max?.length > 0 ? true : false;
      
      const expiryDate = new Date(expiry);
      const expiryTimestamp = Math.floor(expiryDate.getTime() / 1000);


      const couponToken = JWTService.signAccessToken({ code:code  }, expiryTimestamp);

      try{
       const newCoupon = new Coupon({code:code,description:description,type:type,amount:parseInt(amount), expiry:{token:couponToken,date:expiry},min:{isMin:isMin,amount:parseInt(min)},max:{isMin:isMax,amount:parseInt(max)},singleUse:singleUse,excSale:excSale,isFreeShipping:isFreeShipping})
       await newCoupon.save()
       return res.status(200).json({status:200,msg:'Coupon Created Successfully!'})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
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
    console.log(req.body)
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
     }catch(error){return res.status(500).json({status:500,message:'Code Exired!'})}
    }

    const getCart = await Cart.findOne({_id:cartId})
    if(!getCart){
      return res.status(404).json({status:404,message:'Cart Not Found!'})  
    }

    let subTotal = getCart.subTotal;
    let grandTotal = getCart.grandTotal;
    if(getCoupon.type === 'free-shipping'){
      const sub = getCart.subTotal + getCart.tax;
      const cart = await Cart.findOneAndUpdate({_id:cartId},{orderInfo:{...getCart.orderInfo,shipping:'Free'},grandTotal:sub})
      return res.status(200).json({status:200,cart:cart,msg:'Coupon Code Applied!'})        
    }else if(getCoupon.type === 'percentage-discount'){
      subTotal = ((subTotal - ((getCoupon.amount / 100) * subTotal)))
      grandTotal = subTotal + getCart.orderInfo.shipping + getCart.tax;
    }else{
      subTotal = subTotal - getCoupon.amount;
      grandTotal = subTotal + getCart.orderInfo.shipping + getCart.tax;
    }

    // try{
     const UPDATED_CART = await Cart.findOneAndUpdate({_id:cartId},{subTotal:subTotal,grandTotal:grandTotal,coupon:getCoupon},{new:true})
     return res.status(200).json({status:200,cart:UPDATED_CART,msg:'Coupon Code Applied!'})        
    // }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

   }else{
    return res.status(404).json({status:404,message:'Invalid Code!'})
   }
  },


}

module.exports = couponController
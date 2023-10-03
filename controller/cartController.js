const Joi = require("joi");
const Product = require('../models/product');
const Cart = require('../models/cart')
const JWTService = require('../services/JwtService')
const mongoose = require('mongoose')

const cartController = {
    async addToCart(req, res, next) {
       // 1. validate user input
    const cartRegisterSchema = Joi.object({
      cartId: Joi.string().allow(null).empty(''),
      productId: Joi.string().required(),
      orderInfo: Joi.object().required()
    });
      const { error } = cartRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      
      const {cartId,productId,orderInfo} = req.body;

      // Find PRoduct to be added in both type of cart
      const product = await Product.findOne({_id:productId,stock:{$gt:0}});
      if(!product){
        return res.status(500).json({status:500,message:'Product Out of Stock!'});  
      }
      let PRODUCT_PRICE;
      if(product.count === 0){
        return res.status(409).json({status:409,message:'Product Out of Stock!'});  
      }else{
        const PRODUCT_STOCK = product.stock - 1;
        PRODUCT_PRICE = product.salePrice ? product.salePrice : product.regPrice;
        await Product.findOneAndUpdate({_id:productId},{stock:PRODUCT_STOCK},{ new: true })
      }
    
      let CART_ID = cartId;
      if(!CART_ID){
        // Create new Cart 
        try{
          const newCart = new Cart({});
          await newCart.save();
          CART_ID = newCart._id;
        }catch(err){
          const error = {status:500,message:"Internal Server Error!"}
          return next(error)
        }
      }

      const frstImg = product.media.find(item => item.file === 'image');

      const cartToken = JWTService.signAccessToken({ _id: CART_ID }, "10m");
      const cart = await Cart.findOne({_id:CART_ID});
      const TOTAL = PRODUCT_PRICE + cart.total;
      let CART = [];
      if(orderInfo.type === 'delivery'){
        try{
        //Code Block
        CART = await Cart.findByIdAndUpdate(
          CART_ID,
          {
            $push: {
              deliveryOrders: {
                $each: [{
                  pid: product._id,
                  title: product.title,
                  image: frstImg.data,
                  salePrice: product.salePrice,
                  regPrice: product.regPrice,
                  rating: product.rating,
                }],
                $position: 0
              }
            },
             deliveryInfo: orderInfo,
             $inc: { cartCount: 1 },
             expiry:cartToken,
             total: TOTAL.toFixed(2),
             status:'INIT'
            },
          { new: true }
        );
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
      }else{
        try{
         CART = await Cart.findByIdAndUpdate(
           CART_ID,
           {
             $push: {
               pickupOrders: {
                 $each: [{
                   pid: product._id,
                   title: product.title,
                   image: frstImg.data,
                   salePrice: product.salePrice,
                   regPrice: product.regPrice,
                   rating: product.rating,
                  }],
                  $position: 0
               }
             },
             pickupInfo: orderInfo,
             $inc: { cartCount: 1 },
             expiry:cartToken,
             total: TOTAL.toFixed(2),
             status:'INIT'
           },
           { new: true }
         );
        }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
    }

      return res.status(200).json({status:200,cart:CART,msg:'Product Added To Cart!'});

    },
    async updateCart(req, res, next) {
      // 1. validate user input
     const getCartSchema = Joi.object({
       userId: Joi.string().required(),
       pickupLocation:Joi.string().allow(null).empty(''),
       deliveryLocation:Joi.string().allow(null).empty(''),
       deliveryDate:Joi.string().allow(null).empty(''),
       deliveryTime:Joi.string().allow(null).empty(''),
       total:Joi.number().required(),
     });
     const { error } = getCartSchema.validate(req.body);
 
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }

     
     const {userId,pickupLocation, deliveryLocation,deliveryDate,deliveryTime,total} = req.body;
     try{
       const cart = await Cart.findOneAndUpdate(
         userId,
        {
          pickupLocation:pickupLocation,
          deliveryLocation:deliveryLocation,
          deliveryDate:deliveryDate,
          deliveryTime:deliveryTime,
          total:total
        },{new:true});
        
       res.status(200).json({status: 200,cart:cart,msg:'Cart Updated Successfully!'});

     }catch(err){
      const error = {status:500,message:'Internal Server Error!'}
     }

  },
  async getCart(req, res, next) {
    // 1. validate user input
   const getCartSchema = Joi.object({
     cartId: Joi.string().required(),
   });
   const { error } = getCartSchema.validate(req.body);

   // 2. if error in validation -> return error via middleware
   if (error) {
     return next(error)
   }

   
   try{
     const {cartId} = req.body;
     const cart = await Cart.findOne({_id:cartId})
     return res.status(200).json({status: 200,cart:cart});
   }catch(err){
    const error = {status:500,message:'Internal Server Error!'}
    return next(error)
   }
   
  },
  async changeCartProductType(req, res, next) {
    // 1. validate user input
   const getCartSchema = Joi.object({
     cartId: Joi.string().required(),
     objId: Joi.string().required(),
     type: Joi.string().required(),
   });
   const { error } = getCartSchema.validate(req.body);

   // 2. if error in validation -> return error via middleware
   if (error) {
     return next(error)
   }

    const {cartId,objId,type} = req.body;

    const OBJID = new mongoose.Types.ObjectId(objId);
    const CART = await Cart.findOne({_id:cartId});
    
    let REMOVED_ORDER;
    let UPDATED_ORDER;

    if(type === 'pickup'){
      const pickupOrders = CART.pickupOrders.find((item)=> item._id.equals(OBJID))
      try{
        REMOVED_ORDER = await Cart.updateOne(
          { _id: cartId },
        { $pull: { pickupOrders: { _id: objId } } }
        );
        }catch(error){
          return res.status(500).json({ status: 500, message:'Internal Server Error!' });
        }
        try{
        UPDATED_ORDER = await Cart.findByIdAndUpdate(
          cartId,
          {
            $push: {
              deliveryOrders: {
                $each: [{
                  pid: pickupOrders.pid,
                  title: pickupOrders.title,
                  image: pickupOrders.image,
                  salePrice: pickupOrders.salePrice,
                  regPrice: pickupOrders.regPrice,
                  rating: pickupOrders.rating,
                }],
                $position: 0
              }
             },
            },
          { new: true }
        );
        }catch(error){
          return res.status(500).json({ status: 500, message:'Internal Server Error!' });
        }
    }else{
      const deliveryOrders = CART.deliveryOrders.find((item)=> item._id.equals(OBJID))
      try{
      REMOVED_ORDER = await Cart.updateOne(
        { _id: cartId },
        { $pull: { deliveryOrders: { _id: objId } } }
        );
       }catch(error){
        return res.status(500).json({ status: 500, message:'Internal Server Error!' });
       }
       try{
        UPDATED_ORDER = await Cart.findByIdAndUpdate(
          cartId,
          {
            $push: {
              pickupOrders: {
                $each: [{
                  pid: deliveryOrders.pid,
                  title: deliveryOrders.title,
                  image: deliveryOrders.image,
                  salePrice: deliveryOrders.salePrice,
                  regPrice: deliveryOrders.regPrice,
                  rating: deliveryOrders.rating,
                }],
                $position: 0
              }
             },
            },
          { new: true }
        );
      }catch(error){
        return res.status(500).json({ status: 500, message:'Internal Server Error!' });
      }
    }
    
    if(REMOVED_ORDER && UPDATED_ORDER){
      const CART = await Cart.findOne({_id:cartId});
      return res.status(200).json({ status: 200,cart:CART, });
    }else{
      return res.status(500).json({ status: 500, message:'Internal Server Error!' });
    }
      
    
  },
async removeFromCart(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
   cartId: Joi.string().required(),
   pId: Joi.string().required(),
   objId: Joi.string().required(),
   type: Joi.string().required(),
   price: Joi.number().required(),
   total: Joi.number().required(),
   count: Joi.number().required(),
 });
 const { error } = getCartSchema.validate(req.body);
 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }


  const { cartId,pId,objId,type,price,count,total } = req.body;
  
  const resp =  await Product.findOneAndUpdate({_id:pId},{$inc: { stock: 1 }},{ new: true })
  const newTotal = total - price;
  const newCount = count - 1;
  let result
  if(type === 'delivery'){
    result = await Cart.updateOne(
      { _id: cartId }, // Match the cart based on its _id
      { $pull: { deliveryOrders: { _id: objId } }, total: newTotal,cartCount: newCount } // Remove the order from the deliveryOrders array
      );
  }else{
    result = await Cart.updateOne(
      { _id: cartId }, // Match the cart based on its _id
      { $pull: { pickupOrders: { _id: objId } } ,total: newTotal,cartCount: newCount},
      );
  }
  if (result.modifiedCount === 0) {
    // If no document was modified, handle the scenario where the order was not found
    return res.status(404).json({ status: 404, message: 'Order not found' });
  }
   
  const cart = await Cart.findOne({_id:cartId});
  return res.status(200).json({ status: 200, cart:cart,msg:'Product Removed!' });


},

}

module.exports = cartController;
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

      const getProductCount = async (cId,pId,pType,pPrice) => {
        const cart = await Cart.findOne({_id:cId});
        let result;
        if(pType === 'delivery'){
          result = cart.deliveryOrders.find(order => new mongoose.Types.ObjectId(item.pid).equals(pId));
        }else{
         result = cart.pickupOrders.find(item => new mongoose.Types.ObjectId(item.pid).equals(pId) )
        }
        if(!result){
          return {NEW:true,COUNT: 1, TOTAL:(cart.total + pPrice)};
        }else{
          return {NEW:false,COUNT:result.count + 1 , TOTAL: (cart.total + pPrice)};
        }
      }

      const frstImg = product.media.find(item => item.file === 'image');

      const cartToken = JWTService.signAccessToken({ _id: CART_ID }, "10m");
      let CART = [];
      if(orderInfo.type === 'delivery'){
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
                  count: COUNT,
                }],
                $position: 0
              }
             },
             $inc: { cartCount: 1 },
             expiry:cartToken,
             total: TOTAL
            },
          { new: true }
        );
      }else{
        const {NEW,COUNT,TOTAL} = await getProductCount(CART_ID,product._id,orderInfo.type,PRODUCT_PRICE);
        if(!NEW){
            await Cart.findOneAndUpdate(
            { _id: CART_ID, 'pickupOrders.pid': product._id },
            { $set: { 'pickupOrders.$.count': COUNT },$inc: { cartCount: 1 },total:TOTAL },
            { new: true }
          );
        }else{
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
                   count: COUNT,
                 }],
                 $position: 0
               }
             },
             $inc: { cartCount: 1 },
             expiry:cartToken,
             total: TOTAL
           },
           { new: true }
         );
      }
    
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
async removeFromCart(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
   id: Joi.string().required(),
   userId: Joi.string().required(),
   type: Joi.string().required(),
 });
 const { error } = getCartSchema.validate(req.body);

 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }

 
 try {
  const { id, userId,type } = req.body;
  
  let result
  if(type === 'delivery'){
    result = await Cart.updateOne(
      { userId: userId }, // Match the cart based on its _id
      { $pull: { deliveryOrders: { _id: id } } } // Remove the order from the deliveryOrders array
      );
  }else{
    result = await Cart.updateOne(
      { userId: userId }, // Match the cart based on its _id
      { $pull: { pickupOrders: { _id: id } } } // Remove the order from the deliveryOrders array
      );
  }
  
  if (result.modifiedCount === 0) {
    // If no document was modified, handle the scenario where the order was not found
    return res.status(404).json({ status: 404, message: 'Order not found' });
  }

  res.status(200).json({ status: 200, message: 'Product Removed!' });
} catch (err) {
  // Handle any other errors that occur during the update operation
  res.status(500).json({ status: 500, message: 'Internal Server Error!' });
}

},

}

module.exports = cartController;
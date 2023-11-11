const Joi = require("joi");
const Product = require('../models/product');
const Cart = require('../models/cart')
const JWTService = require('../services/JwtService')
const mongoose = require('mongoose')

const cartController = {
    async addToCart(req, res, next) {

    const cartRegisterSchema = Joi.object({
      cartId: Joi.string().allow('').allow(null),
      productId: Joi.string().required(),
      orderInfo: Joi.object().required()
    });
      const { error } = cartRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      
      const {cartId,productId,orderInfo} = req.body;

      let CART_ID = cartId;
      // const cartToken = JWTService.signAccessToken({ _id: CART_ID }, "10m");
      const cartToken = JWTService.signAccessToken({ _id: CART_ID }, "10m");
        
      if(!CART_ID){
        // Create new Cart 
        try{
          const newCart = new Cart({expiry:cartToken});
          await newCart.save();
          CART_ID = newCart._id;
        }catch(err){
          return res.status(500).json({status:500,message:'Internal Server Error!'})
        }
      }

      let PRODUCT_PRICE;
      const PRODUCT = await Product.findOne({_id:productId,stock:{$gt:0}})
      
      if(PRODUCT){
       const PRODUCT_STOCK = PRODUCT.stock - 1;
       PRODUCT_PRICE = PRODUCT.isSale ? PRODUCT.salePrice : PRODUCT.regPrice;
       UPDATED_PRODUCT = await Product.findOneAndUpdate({_id:productId},{stock:PRODUCT_STOCK},{ new: true })
      }else{
        return res.status(500).json({status:500,message:'Product Out Of Stock!'})
      }

      
      const CART = await Cart.findOne({_id:CART_ID});
      const POS_PRICE = CART.subTotal + PRODUCT_PRICE 
      
      if(CART){
        let prds = CART.products;
        const filt = prds.find((item)=>item.pid === productId)
        if(filt){
          const UPDATED_CART2 = await Cart.findOneAndUpdate(
            { _id: CART_ID, 'products.pid': UPDATED_PRODUCT._id },
            {
              $inc: { 'products.$.count': 1,cartCount:1 },
              expiry: cartToken,
              subTotal:  POS_PRICE.toFixed(2),
            },
            { new: true }
         );
         if(UPDATED_CART2){
           return res.status(200).json({status:200,cart:CART,update:UPDATED_PRODUCT,msg:'Product Added To Cart!'})
         }
        }else{
            try{
        UPDATED_CART = await Cart.findByIdAndUpdate(
          CART_ID,
          {
            $push: {
              products: {
                $each: [{
                  pid: UPDATED_PRODUCT._id,
                  title: UPDATED_PRODUCT.title,
                  image: UPDATED_PRODUCT.media.find(item=>item.file === 'image').data,
                  salePrice: UPDATED_PRODUCT.salePrice,
                  regPrice: UPDATED_PRODUCT.regPrice,
                  isSale: UPDATED_PRODUCT.isSale,
                  rating: UPDATED_PRODUCT.rating,
                  modelNo: UPDATED_PRODUCT.modelNo,
                  count: 1,
                  type: UPDATED_PRODUCT.productType,
                }],
                $position: 0
              }
            },
            orderInfo: orderInfo,
            $inc: { cartCount : 1 },
            expiry: cartToken,
            subTotal: POS_PRICE.toFixed(2),
            },
          { new: true }
        );  
      return res.status(200).json({status:200,cart:UPDATED_CART,update:UPDATED_PRODUCT,msg:'Product Added To Cart!'})
       }catch(error){
         return res.status(500).json({status:500,message:'Internal Server Error!'})
       }
        }
      }else{
        return res.status(500).json({status:500,message:'Cart Not Found!'})
      }

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
   try{
     const {cartId} = req.body;
     if(!cartId){
       return res.status(404).json({status: 404,cart:false,message:'Cart is Expired!'});
     }
     const cart = await Cart.findOne({_id:cartId})
     if(!cart){
       return res.status(404).json({status: 404,cart:false,message:'Cart is Expired!'});
     }
     return res.status(200).json({status: 200,cart:cart});
    }catch(err){
     return res.status(500).json({status:500,message:'Internal Server Error!',error:err});
   }
   
  },
  async changeCartProductType(req, res, next) {
     // 1. validate user input
 const getCartSchema = Joi.object({
  cartId: Joi.string().required(),
  orderInfo: Joi.object().required(),
});
const { error } = getCartSchema.validate(req.body);
// 2. if error in validation -> return error via middleware
if (error) {
  return next(error)
}

 const { cartId,orderInfo } = req.body;
  try{
    const CART = await Cart.findOneAndUpdate(
      { _id: cartId }, 
      { orderInfo:orderInfo },
      {new:true}
    );
    if(!CART){
      return res.status(404).json({ status: 404,message:'Cart Expired!' });
    }
    return res.status(200).json({ status: 200, cart:CART,msg:'Order Changed!' });
  }catch(error){
   return res.status(500).json({ status: 500, message:'Internal Server Error!' });
  }
  },
async removeFromCart(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
   cartId: Joi.string().required(),
   productId: Joi.string().required(),
   price: Joi.number().required(),
 });
 const { error } = getCartSchema.validate(req.body);
 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }

 const {cartId,productId,count,price} = req.body;
 
 let CART;
 try{
  CART = await Cart.findOne({_id:cartId})
  if(!CART){
    return res.status(404).json({status:404,message:'Cart Not Found!'})
  }
 }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
 

 const PRODUCT = await Product.findOne({_id:productId})
 if(PRODUCT){
   try{
    const PRODUCT_STOCK = PRODUCT.stock + 1;
    await Product.findOneAndUpdate({_id:productId},{stock:PRODUCT_STOCK},{ new: true })
  }catch(error){
    return res.status(500).json({status:500,message:'Internal Server Error!'})
  }
 }else{
   return res.status(500).json({status:500,message:'Product Out Of Stock!'})
 }

if(count >= 2){
 try{
   const UPDATED_CART2 = await Cart.findOneAndUpdate(
     { _id: cartId, 'products.pid': productId },
     {
       $inc: { 'products.$.count': -1,subTotal: -price,cartCount:1 },
     },
     { new: true }
     );
     if(UPDATED_CART2){
       const GET_UPDATED_CART = await Cart.findOne({_id:cartId})
        return res.status(200).json({status:200,cart:GET_UPDATED_CART,msg:'Product Removed Successfully!'})
      }
   }catch(error){
     return res.status(500).json({status:500,message:'Internal Server Error!'})
   }
 }else{
 try{
 const result = await Cart.updateOne(
    { _id: cartId }, // Match the cart based on its _id
    { $pull: { products: { pid: productId } },
    $inc: { subTotal:-price,cartCount:-1 },
   }
  );
  if(result.modifiedCount === 1){
   const GET_UPDATED_CART = await Cart.findOne({_id:cartId})
    return res.status(200).json({status:200,cart:GET_UPDATED_CART,msg:'Product Removed Successfully!'})
  }
 }catch(error){
   return res.status(500).json({status:500,message:'Internal Server Error!'})
 }


 }


},

async updateDeliveryTimeSlot(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
   cartId: Joi.string().required(),
   orderInfo: Joi.object().required(),
 });
 const { error } = getCartSchema.validate(req.body);
 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }


  const { cartId,orderInfo } = req.body;
   try{
     const CART = await Cart.findOneAndUpdate(
       { _id: cartId }, 
       { orderInfo:orderInfo },
       {new:true}
     );
     if(!CART){
       return res.status(500).json({ status: 500,message:'Cart Expired!' });
     }
     return res.status(200).json({ status: 200, cart:CART,msg:'Time Frame Updated!' });
   }catch(error){
    return res.status(500).json({ status: 500, message:'Internal Server Error!' });
   }
},

async updatePickupLocation(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
   cartId: Joi.string().required(),
   orderInfo: Joi.object().required(),
 });
 const { error } = getCartSchema.validate(req.body);
 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }

  const { cartId,orderInfo } = req.body;
  
   try{
     const CART = await Cart.findOneAndUpdate(
       { _id: cartId }, 
       { orderInfo:orderInfo },
       {new:true}
     );
     if(!CART){
      return res.status(500).json({ status: 500,message:'Cart Expired!' });
     }
     return res.status(200).json({ status: 200, cart:CART });
   }catch(error){
    return res.status(500).json({ status: 500, message:'Internal Server Error!' });
   }
},
async updateDeliveryInfo(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
  cartId: Joi.string().required(),
  orderInfo: Joi.object().required(),
});
const { error } = getCartSchema.validate(req.body);
// 2. if error in validation -> return error via middleware
if (error) {
  return next(error)
}

 const { cartId,orderInfo } = req.body;
 
  try{
    const CART = await Cart.findOneAndUpdate(
      { _id: cartId }, 
      { orderInfo:orderInfo },
      {new:true}
    );
    if(!CART){
     return res.status(500).json({ status: 500,message:'Cart Expired!' });
    }
    return res.status(200).json({ status: 200, cart:CART });
  }catch(error){
   return res.status(500).json({ status: 500, message:'Internal Server Error!' });
  }
},

async updateCartFinance(req, res, next) {
  // 1. validate user input
  // console.log(req.body)
  const getCartSchema = Joi.object({
   cartId: Joi.string().required(),
   total: Joi.number().required(),
   grandTotal: Joi.number().required(),
   tax: Joi.number().required(),
 });
 const { error } = getCartSchema.validate(req.body);
 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }

  const { cartId,total,grandTotal,tax } = req.body;
  
   try{
     const CART = await Cart.findOneAndUpdate(
       { _id: cartId }, 
       { total:total,grandTotal:grandTotal,tax:tax },
       {new:true}
     );
     return res.status(200).json({ status: 200, cart:CART });
   }catch(error){
    return res.status(500).json({ status: 500, message:'Internal Server Error!' });
   }
},

}

module.exports = cartController;
const Joi = require("joi");
const Product = require('../models/product');
const Cart = require('../models/cart')

const cartController = {
    async addToCart(req, res, next) {
       // 1. validate user input
    const categoryRegisterSchema = Joi.object({
      userId: Joi.string().allow(null).empty(''),
      orderType: Joi.string().allow(null).empty(''),
      productId: Joi.string().allow(null).empty(''),
      deliveryLocation: Joi.string().allow(null).empty(''),
      });
      const { error } = categoryRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      
      const {userId,productId,orderType,deliveryLocation} = req.body;
      // console.log(req.body)
      // 1.Get product by id
      let product;
      product = await Product.find({_id:productId,stock:{$gt:0}})
      if(product.length === 0){
        const error = {
           status: 404,
           message:'Product Not Found!'
          }
          return  next(error);
        }
        // 2. Find User Cart
        const userCart = await Cart.find({userId:userId});
        console.log(userCart)
        let newCart;
        if(userCart.length === 0){
          try{
          
          const cartToCreate = new Cart({
            userId:userId
          });
          
          newCart = await cartToCreate.save();
        }catch(err){
          const error = {
            status: 500,
            message: "Internal Server Error!a"
          }
          return next(error)
        }
      }

      let cartId;
      if(newCart){
        cartId = newCart[0]._id;
      }else{
        cartId = userCart[0]._id
      }

      // 3. Create cart Expiry
      const now = new Date();
      const expiry = new Date(now.getTime() + 10 * 60000);
      try{

        // 3. if new cart created then use newCart Id else use userCart Id
        let updatedCart;
        if(orderType === 'delivery'){
          updatedCart = await Cart.findByIdAndUpdate(
            cartId,
            {
              userId:userId,
              $push: {
                deliveryOrders: {
                  $each: [{
                    pid: product[0]._id,
                    title: product[0].title,
                    image: product[0].images[0],
                    salePrice: product[0].salePrice,
                    regularPrice: product[0].regularPrice,
                    rating: product[0].rating,
                  }],
                  $position: 0
                }
              },
              deliveryLocation,
              expiry:expiry
            },
            { new: true }
          );
        }else{
          updatedCart = await Cart.findByIdAndUpdate(
            cartId,
            {
              userId:userId,
              $push: {
                pickupOrders: {
                  $each: [{
                    pid: product[0]._id,
                    title: product[0].title,
                    image: product[0].images[0],
                    salePrice: product[0].salePrice,
                    regularPrice: product[0].regularPrice,
                    rating: product[0].rating,
                  }],
                  $position: 0
                }
              },
              expiry:expiry
            },
            { new: true }
          );
        }
        
        // Update Product Stock Status
        try{
          const product = await Product.findById(productId);
           product.stock -= 1;
           await product.save();
        }catch(err){
          const error={
            status:500,
            message: 'Internal Server Error!aa'
          }
          return next(error)
        } 
          
        res.status(200).json({status: 200, cart:updatedCart});
        
      }catch(error){
        return next(error)
      }
    },
    async updateCart(req, res, next) {
      // 1. validate user input
     const getCartSchema = Joi.object({
       cartId: Joi.string().required(),
       pickupLocation:Joi.string().required(),
       deliveryLocation:Joi.string().required(),
       deliveryDate:Joi.string().required(),
       deliveryTime:Joi.string().required(),
     });
     const { error } = getCartSchema.validate(req.body);
 
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }

     
     const {cartId,pickupLocation, deliveryLocation,deliveryDate,deliveryTime} = req.body;
     try{
       
       const cart = await Cart.findByIdAndUpdate(
        cartId,
        {
          pickupLocation:pickupLocation,
          deliveryLocation:deliveryLocation,
          deliveryDate:deliveryDate,
          deliveryTime:deliveryTime
        },{new:true});
       res.status(200).json({status: 200,cart:cart,msg:'Cart Updated Successfully!'});

     }catch(err){
      const error = {status:500,message:'Internal Server Error!'}
     }

  },
  async getCart(req, res, next) {
    // 1. validate user input
   const getCartSchema = Joi.object({
     userId: Joi.string().required(),
   });
   const { error } = getCartSchema.validate(req.body);

   // 2. if error in validation -> return error via middleware
   if (error) {
     return next(error)
   }

   
   try{
     const {userId} = req.body;
     
     const cart = await Cart.find({userId:userId})
    
     res.status(200).json({status: 200,cart:cart});

   }catch(err){
    const error = {status:500,message:'Internal Server Error!'}
   }

},
async removeFromCart(req, res, next) {
  // 1. validate user input
 const getCartSchema = Joi.object({
   id: Joi.string().required(),
   cartId: Joi.string().required(),
   type: Joi.string().required(),
 });
 const { error } = getCartSchema.validate(req.body);

 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }

 
 try {
  const { id, cartId,type } = req.body;
  // console.log(req.body)
  let result
  if(type === 'delivery'){
    result = await Cart.updateOne(
      { _id: cartId }, // Match the cart based on its _id
      { $pull: { deliveryOrders: { _id: id } } } // Remove the order from the deliveryOrders array
      );
  }else{
    result = await Cart.updateOne(
      { _id: cartId }, // Match the cart based on its _id
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

}
}

module.exports = cartController;
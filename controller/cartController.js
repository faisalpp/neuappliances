const Joi = require("joi");
const Product = require('../models/product');
const Cart = require('../models/cart')

const cartController = {
    async addToCart(req, res, next) {
       // 1. validate user input
    const categoryRegisterSchema = Joi.object({
        userId: Joi.string().required(),
        productId: Joi.string().required(),
        orderType: Joi.string().required(),
        deliveryLocation: Joi.string().required(),
      });
      const { error } = categoryRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      
      const {userId,productId,orderType,deliveryLocation} = req.body;
      
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
        cartId = newCart._id;
      }else{
        cartId = userCart._id
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

  }
}

module.exports = cartController;
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
      });
      const { error } = categoryRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      
      const {userId,productId,orderType} = req.body;
      
      // 1.Get product by id
      const product = await Product.find({_id:productId})
      if(!product){
        const error = {
           status: 404,
           message:'Product Not Found!'
          }
          next(error);
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
              deliveryOrders: [{
                productId: product._id,
                name: product.title,
                imageUrl: product[0].images[0],
                salePrice: product.salePrice,
                regularPrice: product.regularPrice,
                rating: product.rating
              }],
              expiry:expiry
            },
            { new: true }
          );
        }else{
          updatedCart = await Cart.findByIdAndUpdate(
            cartId,
            {
              userId:userId,
              pickupOrders: [{
                productId: product._id,
                name: product.title,
                imageUrl: product[0].images[0],
                salePrice: product.salePrice,
                regularPrice: product.regularPrice,
                rating: product.rating
              }],
              expiry:expiry
            },
            { new: true }
          );
        }
        
        // Update Product Stock Status
        const updateProduct = await Product.findByIdAndUpdate(
          product._id,
          {
            inStock:false
          },{new:true});
          console.log(updateProduct)
          
        res.status(200).json({status: 200, cart:updatedCart});
        
      }catch(error){
        return next(error)
      }
    }
}

module.exports = cartController;
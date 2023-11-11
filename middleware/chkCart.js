const JWTService = require('../services/JwtService');
const Cart = require('../models/cart');
const Joi = require("joi");
const JWTService = require('../services/JwtService')

const chkCart = async (req,res,next) => {
    const cartRegisterSchema = Joi.object({
      cartId: Joi.string().required(),
    });
    const { error } = cartRegisterSchema.validate(req.body);

    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {cartId} = req.body;

   let CART_EXPIRY;
   let PRODUCTS;
   try{
    const CART = Cart.find({_id:req.body.cartId})
    if(!CART){
        return res.status(404).json({status:404,message:'Cart Re-Stocked!'})
    }else{
      PRODUCTS = CART.products;
    }
   }catch(error){
    return next(error);
   }

   let id;
   try {
   id = JWTService.verifyAccessToken(CART.expiry);
   } catch (e) {
   // try{
     await AdminCart.findOneAndDelete({_id:cartId});
     if(CART.products?.length > 0){
       for(let i=0;i<CART.products.length;i++){
        await Product.findOneAndUpdate({_id:PRODUCTS[i].pid},{ $inc: { stock: PRODUCTS[i].count } })
       }
       await AdminCart.findOneAndDelete({_id:cartId});
       return res.status(404).json({status:404,message:'Cart Re-Stocked!'})
     }else{
       await AdminCart.findOneAndDelete({_id:cartId});
       return res.status(404).json({status:404,message:'Cart Expired!'})
     }
   // }catch(e){
   //   return res.status(500).json({status:500,message:'Internal Server Error!'})
   // }
   }

    
    next();


}

module.exports = chkCart;
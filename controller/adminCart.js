const AdminCart = require('../models/adminCart')
const Product = require('../models/product');
const JWTService = require('../services/JwtService');

const adminCartController = {
  async addToCart(req, res, next) {
     const {cartId,productId} = req.body;

    let CART_ID = cartId;
    
    const cartToken = JWTService.signAccessToken({ _id: CART_ID }, "10m");
    if(!CART_ID){
      try{
        const newCart = new AdminCart({expiry:cartToken});
        await newCart.save();
        CART_ID = newCart._id;
      }catch(err){
        return res.status(500).json({status:500,message:'Internal Server Error!'})
      }
    }
    
    let UPDATED_PRODUCT;
    const PRODUCT = await Product.findOne({_id:productId,stock:{$gt:0}})
    const return_price = PRODUCT.isSale ? PRODUCT.salePrice : PRODUCT.regPrice;
    if(PRODUCT){
     const PRODUCT_STOCK = PRODUCT.stock - 1;
     UPDATED_PRODUCT = await Product.findOneAndUpdate({_id:productId},{stock:PRODUCT_STOCK},{ new: true })
    }else{
      return res.status(500).json({status:500,message:'Product Out Of Stock!'})
    }

    
    const CART = await AdminCart.findOne({_id:CART_ID});
    
    if(CART){
      let prds = CART.products;
      const filt = prds.find((item)=>item.pid === productId)
      
      if(filt){

        const UPDATED_CART2 = await AdminCart.findOneAndUpdate(
          { _id: CART_ID, 'products.pid': UPDATED_PRODUCT._id },
          {
              $inc: { 'products.$.count': 1,cartCount:1 }
          },
          { new: true }
       );

       if(UPDATED_CART2){
        const GET_UPDATED_CART = await AdminCart.findOne({_id:cartId})
         return res.status(200).json({status:200,data:GET_UPDATED_CART})
       }
      }else{
          try{
      UPDATED_CART = await AdminCart.findByIdAndUpdate(
        CART_ID,
        {
          $push: {
            products: {
              $each: [{
                pid: UPDATED_PRODUCT._id,
                title: UPDATED_PRODUCT.title,
                image: UPDATED_PRODUCT.media.find(item=>item.file === 'image').data,
                isSale: UPDATED_PRODUCT.isSale,
                salePrice:UPDATED_PRODUCT.salePrice,
                regPrice:UPDATED_PRODUCT.regPrice,
                rating: UPDATED_PRODUCT.rating,
                modelNo: UPDATED_PRODUCT.modelNo,
                count: 1,
                type: UPDATED_PRODUCT.productType,
              }],
              $position: 0
            }
          },
          $inc: { cartCount:1 }
          },
        { new: true }
      );  
    return res.status(200).json({status:200,data:UPDATED_CART,price:return_price})
     }catch(error){
       return res.status(500).json({status:500,messge:'Internal Server Error!'})
     }
      }
    }else{
      return res.status(500).json({status:500,mssage:'Cart Not Found!'})
    }
    

    },
    async incCart(req, res, next) {
      const {cartId,productId} = req.body;
    
      const PRODUCT = await Product.findOne({_id:productId,stock:{$gt:0}})
      
      if(PRODUCT){
       const PRODUCT_STOCK = PRODUCT.stock - 1;
       try{
         await Product.findOneAndUpdate({_id:productId},{stock:PRODUCT_STOCK},{ new: true })
       }catch(error){
         return res.status(500).json({status:500,message:'Internal Server Error!'})
       }
      }else{
        return res.status(500).json({status:500,message:'Product Out Of Stock!'})
      }

      try{

        const UPDATED_CART2 = await AdminCart.findOneAndUpdate(
          { _id: cartId, 'products.pid': productId },
          {
            $inc: { 'products.$.count': 1,cartCount:1 }
          },
          { new: true }
          );
          if(UPDATED_CART2){
            const GET_UPDATED_CART = await AdminCart.findOne({_id:cartId})
             return res.status(200).json({status:200,data:GET_UPDATED_CART})
           }
        }catch(error){
          return res.status(500).json({status:500,message:'Internal Server Error!'})
        }

    },
    async decCart(req, res, next) {
      const {cartId,productId,count} = req.body;
    
      const PRODUCT = await Product.findOne({_id:productId,stock:{$gt:0}})
      
      if(PRODUCT){
       const PRODUCT_STOCK = PRODUCT.stock + 1;
       try{
         await Product.findOneAndUpdate({_id:productId},{stock:PRODUCT_STOCK},{ new: true })
       }catch(error){
         return res.status(500).json({status:500,message:'Internal Server Error!'})
       }
      }else{
        return res.status(500).json({status:500,message:'Product Out Of Stock!'})
      }

     if(count >= 2){
      try{
        const UPDATED_CART2 = await AdminCart.findOneAndUpdate(
          { _id: cartId, 'products.pid': productId },
          {
            $inc: { 'products.$.count': -1,cartCount:-1 }
          },
          { new: true }
          );
          if(UPDATED_CART2){
            const GET_UPDATED_CART = await AdminCart.findOne({_id:cartId})
             return res.status(200).json({status:200,data:GET_UPDATED_CART})
           }
        }catch(error){
          return res.status(500).json({status:500,message:'Internal Server Error!'})
        }
      }else{
      try{
      const result = await AdminCart.updateOne(
         { _id: cartId }, // Match the cart based on its _id
         { $pull: { products: { pid: productId } } } // Remove the order from the deliveryOrders array
       );
       
       if(result.modifiedCount === 1){
        const GET_UPDATED_CART = await AdminCart.findOne({_id:cartId})
         return res.status(200).json({status:200,data:GET_UPDATED_CART})
       }
      }catch(error){
        return res.status(500).json({status:500,message:'Internal Server Error!'})
      }


      }
    },
    async getCart(req, res, next) {
      const {cartId} = req.body;
      
      let CART;
      let PRODUCTS;
      try{
       CART = await AdminCart.findOne({_id:cartId})
       if(!CART){
         return res.status(404).json({status:404,message:'Cart Not Found!'})
       }else{
        PRODUCTS = CART.products;
       }
      }catch(e){
        return res.status(500).json({status:500,message:'Internal Server Error!'})
      }
      
      let id;
      try {
      id = JWTService.verifyAccessToken(CART.expiry);
      } catch (e) {
        // try{
          await AdminCart.findOneAndDelete({_id:cartId});
          if(PRODUCTS?.length > 0){
            for(let i=0;i<PRODUCTS.length;i++){
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

      if(id){
        return res.status(200).json({status:200,data:CART,msg:'Cart Found!'})
      }
    }
}

module.exports = adminCartController;
const cron = require('node-cron');
const Cart = require('../models/cart')
const Product = require('../models/product')
const JWT = require('../services/JwtService')

class HandleCronJobs{
  static async CheckCartExpiry(){
      cron.schedule('*/10 * * * *', async () => {
       try{
        const Carts = await Cart.find({}).select('products').select('expiry');
        if(Carts.length > 0){
         for(let i=0;i<Carts.length;i++){
          let id = Carts[i]._id;
          try{
           JWT.verifyAccessToken(Carts[i].expiry)._id
          }catch(error){
           let products = Carts[i].products;
           for(let j=0;j<products.length;j++){
            const c = await Product.findOneAndUpdate({_id:products[j].pid},{$inc:{stock: products[j].count}},{new:true})
            if(c){
              await Cart.findOneAndDelete({_id:id})
            }
           } 
          }
          
         }
        }
        } catch (error) {
          console.error('Error checking cart expiry:', error);
        }
    
       });      

    }
  }

module.exports = HandleCronJobs;





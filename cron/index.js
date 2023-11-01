const cron = require('node-cron');
const Cart = require('../models/cart')


class HandleCronJobs{
  static async CheckCartExpiry(){
   cron.schedule('* * * * *', async () => {
    const CART = await Cart.find({})
   });
  }

}

module.exports = HandleCronJobs;





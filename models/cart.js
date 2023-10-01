const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  deliveryOrders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    count: { type: Number, required: true,default:0 },
  }],
  pickupOrders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    count: { type: Number, required: true, default:0 },
  }],
  orderInfo: { type: Object },
  cartCount:{type: Number,default:0},
  total:{type: Number,default:0},
  expiry: {type:String},
  status: {type:String},
});

module.exports = mongoose.model('Cart',cartSchema,'carts');
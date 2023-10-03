const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  deliveryOrders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  pickupOrders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  deliveryInfo: { type: Object},
  pickupInfo: { type: Object },
  cartCount:{type: Number,default:0},
  total:{type: Number,default:0},
  expiry: {type:String},
  status: {type:String},
});

module.exports = mongoose.model('Cart',cartSchema,'carts');
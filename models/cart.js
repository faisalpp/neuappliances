const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deliveryOrders: [{
    innerHeightd: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  pickupOrders: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  expiry: {type:String},
});

module.exports = mongoose.model('Cart',cartSchema,'carts');
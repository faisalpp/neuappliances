const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    refPath: 'userType'
  },
  userType: {
    type: String,
    required: true,
    enum: ['User', 'Admin']
  },
  orders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
  }],
  paymentMethod: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema, 'orders');

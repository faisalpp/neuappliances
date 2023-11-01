const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNo: { type: String, required: true },
  customerId: {
    type: mongoose.SchemaTypes.ObjectId,
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
  shippingAddress: {type: mongoose.SchemaTypes.ObjectId, ref: 'OrderAddress',required:true},
  billingAddress:  {type: mongoose.SchemaTypes.ObjectId, ref: 'OrderAddress',required:true},
  paymentInfo: { type: Object},
  shipping: { type: String, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  cartCount: { type: Number, required: true },
  orderType: { type: String, required:true },
  orderStatus: { type: String, default: 'Pending' },
  paymentStatus: { type: String, default: 'Pending' },
},{timestamps: true});

module.exports = mongoose.model('Order', orderSchema, 'orders');

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
    enum: ['User', 'Admin','Guest']
  },
  orders: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    modelNo: { type: String},
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
  orderStatus: { type: String, default: 'pending-payment' },
  customerIp: { type: String, default: 'N/A' },
  isArchived: { type: Boolean, default: false },
},{timestamps: true});

module.exports = mongoose.model('Order', orderSchema, 'orders');

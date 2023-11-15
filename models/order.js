const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNo: { type: String, required: true },
  customerId: {
    type: mongoose.SchemaTypes.ObjectId,
    refPath: 'userType',
    required: false,
    default: null,
  },
  userType: {
    type: String,
    required: true,
    enum: ['User', 'Admin','Guest']
  },
  products: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    salePrice: { type: Number, required: true },
    regPrice: { type: Number, required: true },
    isSale: { type: Number, required: true },
    rating: { type: Number, required: true },
    count:{ type: Number, required: true },
    modelNo:{ type: String, required: true },
    type:{ type: String, required: true },
  }],
  shippingAddress: {type: mongoose.SchemaTypes.ObjectId, ref: 'OrderAddress',required:true},
  billingAddress:  {type: mongoose.SchemaTypes.ObjectId, ref: 'OrderAddress',required:true},
  paymentInfo: { type: Object},
  shipping: { type: Object, required: true },
  coupons: { type: Object },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  cartCount: { type: Number, required: true },
  orderStatus: { type: String, default: 'pending-payment' },
  customerIp: { type: String, default: 'N/A' },
  isArchived: { type: Boolean, default: false },
},{timestamps: true});

module.exports = mongoose.model('Order', orderSchema, 'orders');

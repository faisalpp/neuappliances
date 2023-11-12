const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
  orderNo: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  amount: { type: String, required: true },
  status: { type: String, default: 'pending' },
  media: [{
    type:{type:String, required:true},
    data:{type:String, required:true},
  }],
},{timestamps: true});

module.exports = mongoose.model('Refund', refundSchema, 'refunds');

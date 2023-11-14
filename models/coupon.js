const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({
  code: {type: String, required:true,unique:true},
  description: {type: String},
  type: {type: String, required:true},
  amount: {type: Number},
  isFreeShipping: {type: Boolean,required:false},
  expiry: {type: Object,required:false},
  min: {type: Object},
  max: {type: Object},
  singleUse: {type: Object,required:false},
  excSale: {type: Object,required:false},
},{timestamps: true});

module.exports = mongoose.model('Coupon',couponSchema,'coupons');
const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({
  code: {type: String, required:true,unique:true},
  description: {type: String},
  type: {type: String, required:true},
  amount: {type: Number},
  maxCount: {type: Number,required:true},
  isFreeShipping: {type: Boolean,default:false},
  expiry: {type: Object,required:false},
  min: {type: Object},
  max: {type: Object},
  singleUse: {type: Object,default:false},
  excSale: {type: Object,default:false},
},{timestamps: true});

module.exports = mongoose.model('Coupon',couponSchema,'coupons');
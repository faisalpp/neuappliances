const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  orderType: {type:String},
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
  orderInfo: { type: Object},
  cartCount:{type: Number,default:0},
  expiry: {type:String,required:true},
  tax:{type: Number,default:0},
  coupons:[{
    code: {type: String, required:true},
    description: {type: String},
    type: {type: String, required:true},
    amount: {type: Number},
    maxCount: {type: Number,required:true},
    isFreeShipping: {type: Boolean,required:true},
    min: {type: Object},
    max: {type: Object},
    previous: {type: Object},
    singleUse: {type: Boolean,required:true},
    excSale: {type: Boolean,required:true},
  }],
  subTotal:{type: Number,default:0},
  grandTotal:{type: Number,default:0},
},{timestamps: true});

module.exports = mongoose.model('Cart',cartSchema,'carts');
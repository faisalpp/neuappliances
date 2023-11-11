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
  coupon:{type: Object,default:0},
  subTotal:{type: Number,default:0},
  grandTotal:{type: Number,default:0},
},{timestamps: true});

module.exports = mongoose.model('Cart',cartSchema,'carts');
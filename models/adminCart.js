
const mongoose = require('mongoose');

const adminCartSchema = new mongoose.Schema({
  products: [{
    pid: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    count:{ type: Number, required: true },
    modelNo:{ type: String, required: true },
    type:{ type: String, required: true },
  }],
  expiry: {type:String},
},{timestamps: true});

module.exports = mongoose.model('AdminCart',adminCartSchema,'adminCarts');
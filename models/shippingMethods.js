const mongoose = require('mongoose')

const shippingMethodSchema = new mongoose.Schema({
    type: {type: String, required:true},
    title: {type: String, required:true},
    rate: {type: Number, required:true},
    isClass: {type: Boolean, default:true},
    shippingClasses: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'ShippingClasses' }],
},{timestamps: true});

module.exports = mongoose.model('ShippingMethods',shippingMethodSchema,'shippingMethods');
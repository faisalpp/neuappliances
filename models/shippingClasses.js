const mongoose = require('mongoose')

const shippingClassSchema = new mongoose.Schema({
    title: {type: String, required:true},
    description: {type: String, required:true},
    rate: {type: Number, required:true},
    count: {type: Number, required:true},
},{timestamps: true});

module.exports = mongoose.model('ShippingClasses',shippingClassSchema,'shippingClasses');
// author: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {type: String, required:true},
    category: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category',required:true},
    brand: {type: mongoose.SchemaTypes.ObjectId, ref: 'Brand',required:true},
    images: {type: mongoose.SchemaTypes.Array , required:true},
    modelNo: {type: String, required:true},
    itemId: {type: String, required:true},
    stock: {type: Number, required:true},
    regularPrice: {type: Number, required:true},
    salePrice: {type: Number, required:true},
    fuelType: {type: mongoose.SchemaTypes.Array, required:true},
    dryerOptions: {type: mongoose.SchemaTypes.Array, required:true},
    shortDescription: {type: String, required:true},
    rating: {type: Number, required:true},
    applianceDescription: {type: String, required:true},
    specification: {type: String, required:true},
    deliveryInfo: {type: String, required:true},
    featuresVideo: {type: String, required:true},
},{timestamps: true});

module.exports = mongoose.model('Product',productSchema,'products');

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productType: {type: String, required:true},
    title: {type: String, required:true},
    slug: {type: String, required:true},
    category: {type: String,required:true},
    subCategory: {type: String},
    feature: {type: String},
    type: {type: String},
    color: {type: String},
    brand: {type: String},
    fuelType: {type: String},
    regPrice: {type: Number,required:true},
    salePrice: {type: Number},
    isSale: {type: Boolean,default:false},
    rating: {type: Number,required:true},
    stock: {type: Number,required:true},
    modelNo: {type: String,required:true},
    itemId: {type: String,required:true},
    keyFeatures: {type: Array},
    featureVideo: {type: Object,required:true},
    threeSixty: {type: Object,required:true},
    media: {type: Array,required:true},
    bulletDescription: {type: Array,required:true},
    tags: {type: Array,required:true},
    description: {type: String,required:true},
    specification: {type: String,required:true},
    deliveryInfo: {type: String,required:true},
    metaTitle: {type: String},
    metaDescription: {type: String},
    metaKeywords: {type: String},
},{timestamps: true});

module.exports = mongoose.model('Product',productSchema,'products');
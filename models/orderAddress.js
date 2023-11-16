const mongoose = require('mongoose')

const orderAddressSchema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    type: {type: String,required:true},
    email: {type: String, required:true},
    firstName: {type: String, required:true},
    lastName: {type:String,required:true},
    address: {type:String,required:true},
    appartment: {type:String},
    country: {type:String,required:true},
    state: {type:String,required:true},
    city: {type:String,required:true},
    postalCode: {type:String,required:true},
    phone: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('OrderAddress',orderAddressSchema,'orderAddresses');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type:String},
    email: {type:String,required:true,unique:true},
    phone: {type:String},
    country: {type:String,},
    password: {type:String,required:true},
    isBlocked: {type:Boolean,default:false}
},{timestamps: true});

module.exports = mongoose.model('User',userSchema,'users');
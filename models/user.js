const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type:String},
    email: {type:String,required:true,unique:true},
    phone: {type:String},
    country: {type:String,},
    isAdmin: {type: Boolean ,default: false},
    password: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('User',userSchema,'users');
const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    title: {type:String,required:true,unique:true},
    logo: {type: String, required:true},
},{timestamps: true});

module.exports = mongoose.model('Brand',brandSchema,'brands');
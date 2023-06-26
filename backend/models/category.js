const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    title: {type:String,required:true,unique:true},
    slug: {type:String,required:true,unique:true},
    image: {type: String, required:true},
},{timestamps: true});

module.exports = mongoose.model('Category',categorySchema,'categories');
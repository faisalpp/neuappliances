const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: {type: Number, required:true,unique:true},
    content: {type:String,required:true},
    author: {type:String,required:true},
    type: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('Review',reviewSchema,'reviews');
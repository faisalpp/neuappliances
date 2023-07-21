const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
    rating: {type: String, required:true,unique:true},
    content: {type:String,required:true},
    isGoogle: {type:String,required:true},
    isYandex: {type:String,required:true},
    page: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('Faq',faqSchema,'faqs');
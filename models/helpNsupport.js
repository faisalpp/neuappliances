const mongoose = require('mongoose')

const helpSupportSchema = new mongoose.Schema({
    tabId: {type: mongoose.SchemaTypes.ObjectId, ref: 'HelpNsupportTab'},
    title: {type:String,required:true},
    slug: {type:String,required:true},
    category: {type:String,required:true},
    shortDescription: {type:String,required:true},
    content: {type:String,required:true},
    metaTitle: {type:String},
    metaDescription: {type:String},
    metaKeywords: {type:Array},
},{timestamps: true});

module.exports = mongoose.model('HelpNsupport',helpSupportSchema,'helpNsupports');
const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    url: {type: String, required:true}
},{timestamps: true});

module.exports = mongoose.model('Gallery',gallerySchema,'gallery');
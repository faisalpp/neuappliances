const mongoose = require('mongoose')

const newsEmailSchema = new mongoose.Schema({
    email: {type: String, required:true,unique:true},
},{timestamps: true});

module.exports = mongoose.model('NewsEmail',newsEmailSchema,'newsEmails');
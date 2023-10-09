const mongoose = require('mongoose')

const taxSchema = new mongoose.Schema({
    title: {type: String, required:true},
    zipCodes: { type: String, required:true },
    rate: {type: String, required:true},
    isShipping: {type: Boolean, required:true},
    priority: {type: Number, required:true},
},{timestamps: true});

module.exports = mongoose.model('Taxes',taxSchema,'taxes');
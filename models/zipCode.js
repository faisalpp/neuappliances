const mongoose = require('mongoose')

const zipCodeSchema = new mongoose.Schema({
    zipCode: {type: String, required:true,unique:true},
    description: {type:String,required:true},
    rate: {type: Number,required:true},
    direction: {type:String,required:true},
    calander: {type:String,required:true},
    timeSlots: {type:String,required:true},
},{timestamps: true});

module.exports = mongoose.model('ZipCodes',zipCodeSchema,'zipCodes');
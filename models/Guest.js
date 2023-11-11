const mongoose = require('mongoose')

const guestSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type:String},
    email: {type:String,required:true,unique:true},
    phone: {type:String},
},{timestamps: true});

module.exports = mongoose.model('Guest',guestSchema,'guests');
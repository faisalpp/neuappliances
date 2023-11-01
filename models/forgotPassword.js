const mongoose = require('mongoose')

const forgotPasswordSchema = new mongoose.Schema({
    email: {type: String, required:true,unique:true},
    token: {type: String, required:true,unique:true},
    expiry: {type: String, required:true},
},{timestamps: true});

module.exports = mongoose.model('ForgotPassword',forgotPasswordSchema,'forgotPasswords');
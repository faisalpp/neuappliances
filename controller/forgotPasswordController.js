const Joi = require("joi");
const User = require('../models/user')
const ForgotPassword = require('../models/forgotPassword')
const NeuMailer = require('../services/NeuMailer')
const {WEBSITE_HOST_ADDRESS,NODE_ENV} = require('../config/index')
const crypto = require('crypto');
const EmailTemplates = require('../services/EmailTemplates')
const bcrypt = require("bcryptjs");

const forgotPasswordController = {
    async createPasswordToken(req, res, next) {
     // 1. validate user input
     const categoryRegisterSchema = Joi.object({
        email: Joi.string().required(),
      });
      const { error } = categoryRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      } 

      const {email} = req.body;
      
      let USER;
      try{
       USER = await User.findOne({email:email}).select('_id')
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

      if(!USER){
        return res.status(500).json({status:500,message:'User With This Email Not Found!'})
      }

      let IS_EMAIL;
      try{
        IS_EMAIL = await User.findOne({email:email})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

      if(!IS_EMAIL){
        return res.status(500).json({status:500,message:'Password Reset Link Already Sent To Your Email Address!'})
      }

      // Generate Hash of Password
      const passToken = crypto.randomBytes(20).toString('hex');

      // Create Expiry Date
      var now = new Date();
      var expiryDate = new Date(now.getTime() + 60 * 60 * 1000);
      
      try{
      const createPassToken = new ForgotPassword({
        email: email,
        token: passToken,
        expiry:expiryDate
      })
    
     await createPassToken.save()
     let host = NODE_ENV === "production" ?  WEBSITE_HOST_ADDRESS : 'http://localhost:5173';
     const TOKEN_URL = `${host}` + `/reset-password/${passToken}`;
     const body = EmailTemplates.ForgotPasswordTemplate(TOKEN_URL)
     await NeuMailer.NodeMailer(body,'Password Reset Link!',email)
     return res.status(200).json({ status: 200,msg:"Password Reset Link Sent To Your Email Address!" });
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

  },

  async resetPassword(req, res, next) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/;
    // 1. validate user input
   const resetPassowrdSchema = Joi.object({
    token: Joi.string().required(),
    password: Joi.string().pattern(passwordPattern).required(),
    confirmPassword: Joi.ref("password"),
  });
  const { error } = resetPassowrdSchema.validate(req.body);
  
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }

  const {password,token} = req.body;

  // find token
  let TOKEN;
  try{
   TOKEN = await ForgotPassword.findOne({token:token})
   if(!TOKEN){
     return res.status(500).json({status:500,message:'Invalid Link!'})
   }
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}


  // Create New Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update User Password
  let passUpdate;
  try{
   passUpdate = await User.findOneAndUpdate({email:TOKEN.email},{password:hashedPassword},{new:true})
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

  if(passUpdate){
   try{
    await ForgotPassword.findByIdAndDelete(TOKEN._id)
    return res.status(200).json({status:200,msg:'Password Reset Successful!'})
   }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  }


 },

 async validatePasswordToken(req, res, next) {

    // 1. validate user input
   const resetPassowrdSchema = Joi.object({
    token: Joi.string().required(),
   });
   const { error } = resetPassowrdSchema.validate(req.body);
  
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }

  const {token} = req.body;
  
  
  let TOKEN;
  try{
   TOKEN = await ForgotPassword.findOne({token:token})
   if(!TOKEN){
     return res.status(500).json({status:500,message:'Invalid Link!'}) 
   }
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  
  const now = new Date();
  const expiryDate = new Date(TOKEN.expiry);
  const isExpired = now.getTime() > expiryDate.getTime();
  if(isExpired){
   try{
    await ForgotPassword.findByIdAndDelete(TOKEN._id)
    return res.status(500).json({status:500,message:'Link is Expired!'}) 
   }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  }else{ 
   return res.status(200).json({status:200,message:'Valid Link!'}) 
  }

 }

}

module.exports = forgotPasswordController
const UserProfileDTO = require('../dto/profile')
const User = require("../models/user");
const OrderAddress = require("../models/orderAddress");
const Joi = require('joi')
const bcrypt = require("bcryptjs");

const userProfileController = {
    
 // Get User Profile
 async getUserProfile(req,res,next) {
    
    const {_id} = req.body
    try {
      const user = await User.findOne({_id});
     if(!user){
       const error = {status: 401,message: "Invalid Credentials!"}
       return next(error);
     }

     const userDto = new UserProfileDTO(user);
     return res.status(200).json({status:200,user: userDto,msg:'Login Successful!',auth:true});

    } catch (error) {
        return next(error);
    }
 },

 async UpdateProfile(req,res,next){
    const {_id,firstName,lastName,email,country} = req.body;
    try {
      
      const updateUser = await User.findByIdAndUpdate(
        _id,
        { firstName, lastName ,email, country},
        { new: true }
        );
        
        return res.status(200).json({status:200,msg:'User Profile Updated!'});

    } catch (error) {
      return next(error);
    }

 },

 async getShippingAddresses(req,res,next){
  const {_id} = req.body;
  try {
    
    const isUser = await User.findOne({_id:_id});

      if(!isUser){
        const error = {status: 401,message: "Unauthorized!"}
        return next(error);
      }

      try{
       const shippingAddresses = await OrderAddress.find({userId:_id,type:'shipping'})
       return res.status(200).json({status:200,shippingAddresses:shippingAddresses});
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}

  } catch (error) {
    return next(error);
  }

},
 async getShippingAddrById(req,res,next){
  const {id} = req.body;
  try {
      try{
       const shippingAddresses = await OrderAddress.findOne({_id:id})
       return res.status(200).json({status:200,shippingAddress:shippingAddresses});
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}

  } catch (error) {
    return next(error);
  }

},

async createShippingAddresses(req,res,next){
  // 1. validate user input
  const deleteShippingSchema = Joi.object({
    userId: Joi.string().required(),
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    appartment: Joi.allow(null).empty(''),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.string().required(),
    phone: Joi.string().required(),
  });
  const { error } = deleteShippingSchema.validate(req.body);
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }

  const {userId,email,firstName,lastName,address,appartment,country,state,city,postalCode,phone} = req.body;
  
  try{
   const createShippingAddr = new OrderAddress({userId:userId,type:'shipping',email:email,firstName:firstName,lastName:lastName,address:address,appartment:appartment,country:country,state:state,city:city,postalCode:postalCode,phone:phone})
   await createShippingAddr.save()
   return res.status(200).json({status:200,msg:"Shipping Address Deleted!"});
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

},

async updateShippingAddresses(req,res,next){
  // 1. validate user input
  const updateShippingSchema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    appartment: Joi.allow(null).empty(''),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.string().required(),
    phone: Joi.string().required(),
  });
  const { error } = updateShippingSchema.validate(req.body);
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }

  const {id,userId,email,firstName,lastName,address,appartment,country,state,city,postalCode,phone} = req.body;
  
  try{
   await OrderAddress.findByIdAndUpdate(
    id,
    {userId:userId,type:'shipping',email:email,firstName:firstName,lastName:lastName,address:address,appartment:appartment,country:country,state:state,city:city,postalCode:postalCode,phone:phone}
    )
   return res.status(200).json({status:200,msg:"Shipping Address Updated!"});
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

},

async deleteShippingAddresses(req,res,next){
  // 1. validate user input
  const deleteShippingSchema = Joi.object({
    id: Joi.string().required(),
  });
  const { error } = deleteShippingSchema.validate(req.body);
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }

  const {id} = req.body;
  
  try{
   await OrderAddress.findByIdAndDelete(id)
   return res.status(200).json({status:200,msg:"Shipping Address Deleted!"});
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

},

 async getBillingAddresses(req,res,next){
  const {_id} = req.body;

  try{
   const billingAddress = await OrderAddress.findOne({userId:_id,type:'billing'})
   return res.status(200).json({status:200,billingAddress:billingAddress});
  }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}

},

async updateBillingAddresses(req,res,next){
  // 1. validate user input
  const updateShippingSchema = Joi.object({
    id: Joi.allow(null).empty(''),
    userId: Joi.string().required(),
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.string().required(),
    phone: Joi.string().required(),
  });
  const { error } = updateShippingSchema.validate(req.body);
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }

  const {id,userId,email,firstName,lastName,address,country,state,city,postalCode,phone} =  req.body;

  if(id === ''){
    try{
      const createShippingAddr = new OrderAddress({userId:userId,type:'billing',email:email,firstName:firstName,lastName:lastName,address:address,country:country,state:state,city:city,postalCode:postalCode,phone:phone})
      await createShippingAddr.save()
      return res.status(200).json({status:200,msg:"Billing Address Saved!"});
     }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  }else{
    try{
      await OrderAddress.findByIdAndUpdate(
       id,
       {userId:userId,type:'billing',email:email,firstName:firstName,lastName:lastName,address:address,country:country,state:state,city:city,postalCode:postalCode,phone:phone}
       )
      return res.status(200).json({status:200,msg:"Shipping Address Saved!"});
     }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  }

},

async changePassword(req,res,next){
   // 1. validate user input
   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/;

   const resetPassowrdSchema = Joi.object({
    userId: Joi.string().required(),
    password: Joi.string().pattern(passwordPattern).required(),
    confirmPassword: Joi.ref("password"),
  });
  const { error } = resetPassowrdSchema.validate(req.body);
  
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }

  const {userId,password} =  req.body;

  let USER;
  try{
   USER = await User.findOne({_id:userId})
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

  if(!USER){
    return res.status(500).json({status:500,message:'User Not Found!'})
  }
  
  // // Create New Password
  const hashedPassword = await bcrypt.hash(password, 10);

  try{
    await User.findOneAndUpdate({_id:userId},{password:hashedPassword},{new:true})
    return res.status(200).json({status:200,msg:'Password Changed Successfully!'})
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

},

async getPreferences(req,res,next){
  // 1. validate user input
  const updateNewsSchema = Joi.object({
   userId: Joi.string().required(),
 });
 const { error } = updateNewsSchema.validate(req.body);
 
 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }

 const {userId} =  req.body;

 try{
  const USER = await User.findOne({_id:userId}).select('isNews').select('isOffers')
  return res.status(200).json({status:200,user:USER})
 }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

},
async updateNewsLetter(req,res,next){
  // 1. validate user input
  const updateNewsSchema = Joi.object({
   userId: Joi.string().required(),
   name: Joi.string().required(),
   value: Joi.boolean().required(),
 });
 const { error } = updateNewsSchema.validate(req.body);
 
 // 2. if error in validation -> return error via middleware
 if (error) {
   return next(error)
 }

 const {userId,name,value} =  req.body;

 try{
  let data;
   if(name === 'news'){
    data = await User.findOneAndUpdate({_id:userId},{isNews:value},{new:true})
    }else{
    data = await User.findOneAndUpdate({_id:userId},{isOffers:value},{new:true})
    }
    return res.status(200).json({status:200,data:data,msg:'Preferences Changed Successfully!'})
 }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

},

}



module.exports = userProfileController;
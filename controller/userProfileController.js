const UserProfileDTO = require('../dto/profile')
const User = require("../models/user");
const OrderAddress = require("../models/orderAddress");

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

        if(!updateUser){
          const error = {status: 401,message: "Invalid Credentials!"}
          return next(error);
        }
        
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
 async getBillingAddresses(req,res,next){
  const {_id} = req.body;
  try {
    
    const isUser = await User.findOne({_id:_id});

      if(!isUser){
        const error = {status: 401,message: "Unauthorized!"}
        return next(error);
      }

      try{
       const billingAddress = await OrderAddress.findOne({userId:_id,type:'billing'})
       return res.status(200).json({status:200,billingAddress:billingAddress});
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}

  } catch (error) {
    return next(error);
  }

},

}



module.exports = userProfileController;
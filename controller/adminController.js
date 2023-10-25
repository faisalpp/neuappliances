const Joi = require("joi");
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const RefreshToken = require('../models/token');
const JWTService = require("../services/JwtService");
const AdminDTO = require('../dto/admin')
const mongoose = require('mongoose')
const axios = require('axios')

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/;

const adminController = {
  async affirm(req, res, next) {
    const publicKey = "KXB67DEZZ0DZ6DLX"
    const secretKey = "wYk8suh3mtC4uGnSOlbWMIMRbiDTuJb4"
    
    // Define the API endpoint for Affirm's estimate
    const apiUrl = 'https://api.affirm.com/api/v2/estimate';
    
    // Set the parameters for the request (these may vary)
    const params = {
      public_api_key: publicKey,
      amount: 1000,  // The purchase amount for which you want to estimate installments
      term: 12,      // The desired loan term (in months)
    };
    
    // Create a basic authentication header using your secret key
    const authHeader = {
      username: publicKey,
      password: secretKey,
    };
    
    // Make the API request
    await axios.get(apiUrl, { params, auth: authHeader })
      .then(response => {
        // Handle the response
        if (response.status === 200) {
          const data = response.data;
          // Extract and process installment pricing data from the response
          console.log(data);
        } else {
          console.error('Error:', response.status);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },
  async register(req, res, next) {
    // 1. validate user input
    // const userRegisterSchema = Joi.object({
    //   firstName: Joi.string().min(8).max(30).required(),
    //   lastName: Joi.string().max(30).required(),
    //   email: Joi.string().email().required(),
    //   phone: Joi.string().required(),
    //   country: Joi.string().required(),
    //   password: Joi.string().pattern(passwordPattern).required(),
    //   confirmPassword: Joi.ref("password"),
    // });
    // const { error } = userRegisterSchema.validate(req.body);

    // 2. if error in validation -> return error via middleware
    // if (error) {
    //   return next(error)
    // }

    // 3. if email or username is already registered -> return an error
    // const {firstName, lastName, email, phone,country,password } = req.body;

    try {
      const emailInUse = await Admin.exists({ email:'muhammadfaisal522@gmail.com' });

      if (emailInUse) {
        const error = {
          status: 409,
          message: "Email Already Exits!",
        };

        return next(error);
      }

    // 4. password hash
    const hashedPassword = await bcrypt.hash('Admin12', 10);

      const adminToRegister = new Admin({
        firstName:'admin',
        lastName:'gagan',
        email:'gaganvirkpta1@gmail.com',
        password: hashedPassword,
      });

      const admin = await adminToRegister.save();

    } catch (error) {
      return next(error);
    }

    return res.status(200).json({ status: 200,msg:"Signup Successfull!" });
  },

  async login(req,res,next){
    // 1. validate user input
    const adminLoginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error } = adminLoginSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }
    
    const { email, password } = req.body;
    let admin;
    try{
      admin = await Admin.findOne({email});
      if(!admin){
         const error = {
          status: 401,
          message: "Invalid Credentials!"
         }
         return next(error);
        }

         const match = await bcrypt.compare(password,admin.password);
         if(!match){
          const error = {
            status: 401,
            message: "Invalid Credentials!"
           } 
           return next(error);
         }    

    }catch(error){
      return next(error);
    }
    const refreshToken = JWTService.signRefreshToken({_id:admin._id},'1d');
    const accessToken = JWTService.signAccessToken({_id:admin._id},'30m');

    // update refresh token in database
    try {
      await RefreshToken.updateOne(
        {
          _id: admin._id,
        },
        { token: refreshToken },
        { upsert: true }
      );
    } catch (error) {
      return next(error);
    }

    res.cookie('accessToken',accessToken,{httpOnly:false,maxAge: 24 * 60 * 60 * 1000});
    res.cookie('refreshToken',refreshToken,{httpOnly:false,maxAge: 24 * 60 * 60 * 1000});

    const adminDto = new AdminDTO(admin);

    return res.status(200).json({status:200,admin: adminDto,msg:'Login Successful!',auth:true});

  },

  async logout(req,res,next){
    const {refreshToken} = req.cookies;
    try{
      await RefreshToken.deleteOne({token:refreshToken});
    }catch(error){
      next(error);
    }

    // delete cookies
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json({status: 200, msg: 'Logout Successfull!'});

  },

  async refresh(req, res, next) {
    // 1. get refreshToken from cookies
    // 2. verify refreshToken
    // 3. generate new tokens
    // 4. update db, return response

    const originalRefreshToken = req.cookies.refreshToken;

    let id;

    try {
      id = JWTService.verifyRefreshToken(originalRefreshToken)._id;
    } catch (e) {
      const error = {
        status: 401,
        message: "Unauthorized",
      };

      return next(error);
    }

    try {
      const match = RefreshToken.findOne({
        _id: id,
        token: originalRefreshToken,
      });

      if (!match) {
        const error = {
          status: 401,
          message: "Unauthorized",
        };

        return next(error);
      }
    } catch (e) {
      return next(e);
    }

    try {
      const accessToken = JWTService.signAccessToken({ _id: id }, "30m");

      const refreshToken = JWTService.signRefreshToken({ _id: id }, "1d");

      await RefreshToken.updateOne({ _id: id }, { token: refreshToken });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });

    } catch (e) {
      return next(e);
    }

    const user = await Admin.findOne({ _id: id });
    
    const AdminDto = new AdminDTO(user);

    return res.status(200).json({ user: AdminDto, auth: true });
  },

  async changePassword(req, res, next) {

    // 1. validate user input
    const userRegisterSchema = Joi.object({
      newPass: Joi.string().pattern(passwordPattern).required(),
      currentPass: Joi.string().pattern(passwordPattern).required(),
      confNewPass: Joi.ref("newPass"),
    });
    const { error } = userRegisterSchema.validate(req.body);

    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const originalRefreshToken = req.cookies.refreshToken;

    let id;

    try {
      id = JWTService.verifyRefreshToken(originalRefreshToken)._id;
    } catch (e) {
      const error = {
        status: 401,
        message: "Unauthorized",
      };

      return next(error);
    }

    try {
      const match = RefreshToken.findOne({
        _id: id,
        token: originalRefreshToken,
      });

      if (!match) {
        const error = {
          status: 401,
          message: "Unauthorized",
        };

        return next(error);

      }
    } catch (e) {
      return next(e);
    }

    try {

      const findAdmin = await Admin.findOne({_id:id});
      if(!findAdmin){
        const error = {
          status: 401,
          message: "Unauthorized",
        };
        return next(error);
      } 
      
      const {currentPass,newPass} = req.body;

      const match = await bcrypt.compare(currentPass,findAdmin.password);
       if(!match){
        const error = {
          status: 401,
          message: "Invalid Credentials!"
         } 
         return next(error);
       }

       const newHashedPassword = await bcrypt.hash(newPass, 10);
       const objectId = new mongoose.Types.ObjectId(id);
       const upadtePass = await Admin.findOneAndUpdate(
        objectId,
        {password:newHashedPassword},
        { new: true }
       )

       return res.status(200).json({ status: 200, msg: 'Password Changed Successfully!' });

    } catch (e) {
      return next(e);
    }
    
  },


};

module.exports = adminController;
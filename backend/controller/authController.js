const Joi = require("joi");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const JwtService = require('../services/JwtService')

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const authController = {
  async register(req, res, next) {
    // 1. validate user input
    const userRegisterSchema = Joi.object({
      firstName: Joi.string().min(5).max(30).required(),
      lastName: Joi.string().max(30).required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      country: Joi.string().required(),
      password: Joi.string().pattern(passwordPattern).required(),
      confirmPassword: Joi.ref("password"),
    });
    const { error } = userRegisterSchema.validate(req.body);

    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    // 3. if email or username is already registered -> return an error
    const {firstName, lastName, email, phone,country,password } = req.body;

    try {
      const emailInUse = await User.exists({ email });

      if (emailInUse) {
        const error = {
          status: 409,
          message: "Email already registered, use another email!",
        };

        return next(error);
      }

    // 4. password hash
    const hashedPassword = await bcrypt.hash(password, 10);

    let user;

      const userToRegister = new User({
        firstName,
        lastName,
        email,
        phone,
        country,
        password: hashedPassword,
      });

      user = await userToRegister.save();

    } catch (error) {
      return next(error);
    }

    return res.status(200).json({ msg:"Signup Successfull!" });
  },

  async login(req,res,next){
    // 1. validate user input
    const userLoginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().pattern(passwordPattern).required(),
    });

    const { error } = userLoginSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }
    
    const { email, password } = req.body;
    
    let user;
    
    try{
      user = await User.findOne({email});
      if(!user){
         const error = {
          status: 401,
          message: "Invalid Credentials!"
         }
         return next(error);
        }

         const match = await bcrypt.compare(password,user.password);
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

    // Generate new Token
    const accessToken = JwtService.signAccessToken({_id:user._id},"30m");
    return res.status(200).json({status:200,token:accessToken,msg:'Login Successful!'});

  }

};

module.exports = authController;
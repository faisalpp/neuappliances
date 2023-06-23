const Brand = require("../models/brand");
const RefreshToken = require('../models/token');
const JWTService = require("../services/JwtService");
const Joi = require("joi");

const userProfileController = {
    async CreateBrand(req,res,next){
     
    // 1. validate user input
    const userRegisterSchema = Joi.object({
        title: Joi.string().max(30).required(),
        image: Joi.string().required(),
      });
      const { error } = userRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {title,image} = req.body;

      try {
        const titleInUse = await Brand.exists({ title });
  
        if (titleInUse) {
          const error = {
            status: 409,
            message: "Brand Already Exits!",
          };
  
          return next(error);
        }
        let brand;
    
          const brandToRegister = new Brand({
            title,
            image,
          });
    
          user = await brandToRegister.save();
    
        } catch (error) {
          return next(error);
        }



    }
}
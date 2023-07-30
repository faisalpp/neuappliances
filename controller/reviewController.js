const Joi = require("joi");
const Review = require('../models/review')

const reviewController = {

    async createReview(req, res, next) {
      // 1. validate user input
     const getCartSchema = Joi.object({
      author: Joi.string().required(),
      page: Joi.string().required(),
      content: Joi.string().required(),
      rating: Joi.string().required(),
    });
    const { error } = getCartSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }


    const {page,author,content,rating} = req.body;

   try{
     
    const reviewToCreate = new Review({
     page,
     author,
     content,
     rating
    });
  
    const savedAddress = await reviewToCreate.save()
    
    res.status(200).json({status: 200,msg:"Review Saved!"});
  
   }catch(err){
    const error = {status:500,message:'Internal Server Error!'}
    return next(error)
   }

  }
}

module.exports = reviewController

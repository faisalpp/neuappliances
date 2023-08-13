const Joi = require("joi");
const Review = require('../models/review')
const {GOOGLE_API_KEY, GOOGLE_PLACE_ID} = require('../config/index')
const axios = require('axios');

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

  },

  async getGoogleReviews(req, res, next) {
    const placeId = GOOGLE_PLACE_ID;
    const apiKey = GOOGLE_API_KEY; // Replace with your Google API key
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`);
        res.status(200).json({ reviews:response.data.result.reviews });
    } catch (error) {
        console.error('Error fetching reviews:', error.message);
        res.status(500).json({ error: 'Error fetching reviews' });
    }
  }

}

module.exports = reviewController

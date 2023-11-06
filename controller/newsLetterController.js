const Joi = require("joi");
const NewsEmail = require("../models/newsEmail");

const newsLetterController = {
    async SubscribeToNewLetter(req, res, next) {
     // 1. validate user input
     const newsSchema = Joi.object({
       email: Joi.string().required(),
     });
     const { error } = newsSchema.validate(req.body);
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
 
     const { email } = req.body;

     const isEmail = await NewsEmail.findOne({email:email})
     if(isEmail){
         return res.status(200).json({ status: 200,msg:'Already Subscribed!' });
     }

     try{
      const newsEmail = new NewsEmail({email:email});
      await newsEmail.save()
      return res.status(200).json({ status: 200,msg:'News Letter Subscribed!' });
      }catch(error){
       return res.status(500).json({ status: 500, message:'Internal Server Error!' });
      }
  },
}

module.exports = newsLetterController
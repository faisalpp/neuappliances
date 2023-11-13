const Joi = require("joi");
const FavoriteProduct = require("../models/favouriteProduct");

const favoriteController = {
    async AddToFavorite(req, res, next) {
     // 1. validate user input
     const getCartSchema = Joi.object({
       userId: Joi.string().required(),
       pid: Joi.string().required(),
       userType: Joi.string().required(),
       product: Joi.string().required(),
     });
     const { error } = getCartSchema.validate(req.body);
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
 
     const { userId,pid,userType,product } = req.body;

     const isFavorite = await FavoriteProduct.findOne({userId:userId,pid:pid})
     
     if(isFavorite){
       return res.status(500).json({ status: 500, message:'Product Already Favorite!' });
     }

     try{
      const createFavorite = new FavoriteProduct({userId:userId,userType:userType,pid:pid,product:product});
      await createFavorite.save()
      return res.status(200).json({ status: 200,msg:'Product Add To Favrites' });
      }catch(error){
       return res.status(500).json({ status: 500, message:'Internal Server Error!' });
      }
  },
    async RemoveFromFavorite(req, res, next) {
     // 1. validate user inpu
     const getCartSchema = Joi.object({
       userId: Joi.string().required(),
       pid: Joi.string().required(),
     });
     const { error } = getCartSchema.validate(req.body);
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
 
     const {userId,pid} = req.body;

     try{
      await FavoriteProduct.findOneAndDelete({pid:pid,userId:userId},{new:true});
      return res.status(200).json({ status: 200,msg:'Product Removed from Favorites' });
      }catch(error){
       return res.status(500).json({ status: 500, message:'Internal Server Error!' });
      }
  },
    async GetFavorites(req, res, next) {
     // 1. validate user inpu
     const getCartSchema = Joi.object({
       userId: Joi.string().required(),
     });
     const { error } = getCartSchema.validate(req.body);
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
 
     const {userId} = req.body;

     
     try{
      const favorites = await FavoriteProduct.find({userId:userId}); 
      return res.status(200).json({ status: 200,favorites:favorites });
      }catch(error){
       return res.status(500).json({ status: 500, message:'Internal Server Error!' });
      }
  },
    async CheckFavorite(req, res, next) {
     // 1. validate user inpu
     const getCartSchema = Joi.object({
       userId: Joi.string().required(),
       pid: Joi.string().required(),
     });
     const { error } = getCartSchema.validate(req.body);
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
 
     const {userId,pid} = req.body;

     try{
      const favorites = await FavoriteProduct.findOne({userId:userId,pid:pid});
      if(favorites){
        return res.status(200).json({ status: 200,favrites:favorites });
      }else{
        return res.status(404).json({ status: 404});
      }
      }catch(error){
       return res.status(500).json({ status: 500, message:'Internal Server Error!' });
      }
  },
}

module.exports = favoriteController
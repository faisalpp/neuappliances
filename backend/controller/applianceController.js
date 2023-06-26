const Category = require("../models/category");

const applianceController = {
    async GetAppliance(req,res,next){
      try{
        const categories = await Category.find({});
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }      
    },

}

module.exports = applianceController;
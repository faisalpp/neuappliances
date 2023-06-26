const Category = require("../models/category");
const categorySection = require("../models/categorySection");
const sectionItem = require("../models/sectionItem");

const applianceController = {
    async GetAppliances(req,res,next){
      try{
        const categories = await Category.find({});
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }      
    },
    async GetApplianceSections(req,res,next){
      const {categoryId} = req.body;
      console.log(categoryId)
      
      categorySection.find({ categoryId: categoryId })
      .populate('sectionItemsId')
      .exec()
      .then(categorySections => {
        // categorySections will contain an array of CategorySection documents
        console.log(categorySections)
        return res.status(200).json({status:200,categorySections:categorySections});
      })
      .catch(err => {
        return res.status(500).json({status:500,msg:"Internal Server Error!"});
      });

    }

}

module.exports = applianceController;
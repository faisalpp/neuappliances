const categorySection = require("../models/categorySection");
const sectionItem = require("../models/sectionItem");
const Joi = require("joi");
const fs = require('fs')

const sectionController = {
    async CreateSection(req,res,next){
    
    // 1. validate user input
    const sectionRegisterSchema = Joi.object({
        title: Joi.string().required(),
        cardStyle: Joi.string().required(),
        slug: Joi.string().required(),
        categoryId: Joi.string().required(),
      });
      const { error } = sectionRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {cardStyle,title,slug,categoryId} = req.body;
      
      try {
        

      const titleInUse = await categorySection.exists({ title });
  
        if (titleInUse) {
          const error = {
            status: 409,
            message: "Category Section Already Exits!",
          };
  
          return next(error);
        }

    
          const categorySectionToRegister = new categorySection({
            cardStyle,
            title,
            slug: slug,
            categoryId
          });

    
         const categorySections = await categorySectionToRegister.save();

        return res.status(200).json({status:200,msg:'Category Section Created Successfully!'});
    
        } catch (error) {
          return next(error);
        }
    },
    async CreateSectionItem(req,res,next){
    
      // 1. validate user input
      const sectionItemRegisterSchema = Joi.object({
          title: Joi.string(),
          image: Joi.string().required(),
          rating: Joi.string().allow('').allow(null),
          sectionId: Joi.string().required(),
        });
        const { error } = sectionItemRegisterSchema.validate(req.body);
    
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
  
        const {title,image,rating,sectionId} = req.body;
        
        try {
        // read as buffer
        const buffer = Buffer.from(
          image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
          "base64"
        );

        // allot a random name
        const imagePath = `${Date.now()}-${sectionId}.png`;

        try {
         fs.writeFileSync(`storage/sectionItems/${imagePath}`, buffer);
        } catch (error) {
          return next(error);
        }
  
            const sectionItemToRegister = new sectionItem({
              title,
              image:imagePath,
              rating,
              sectionId,
            });
  
      
           await sectionItemToRegister.save()
           .then(savedSectionItem => {
            // Step 3: Update the CategorySection's sectionItems array with the new SectionItem's ID
            return categorySection.updateOne(
              { _id: sectionId },
              { $push: { sectionItemsId: savedSectionItem._id } }
            );
          })
          .then(() => {
            // Step 4: SectionItem created and associated with CategorySection successfully
            return res.status(200).json({status:200,msg:'Section Item Created Successfully!'});
          })
          .catch(err => {
            return res.status(500).json({status:500,msg:'Internal Server Error!'});
          });
  
      
          } catch (error) {
            return next(error);
          }
      },

      async GetSectionItems(req,res,next){
        const {sectionId} = req.body;
        try{
          const sectionItems = await sectionItem.find({sectionId: sectionId});
          return res.status(200).json({status:200,sectionItems});
        }catch(error){
          return next(error)
        }
      },

    async GetCategorySections(req,res,next){
      const {categoryId} = req.body;
  
      try{
        const categorySections = await categorySection.find({categoryId: categoryId});

          return res.status(200).json({status:200,categorySections:categorySections});
        }catch(error){
          return next(error)
        }
    }

}

module.exports = sectionController;
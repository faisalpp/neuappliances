const Category = require("../models/category");
const Blog = require("../models/blog");
const categorySection = require("../models/categorySection");
const sectionItem = require("../models/sectionItem");
const Joi = require("joi");
const AWSService = require('../services/S3Upload')


const categoryController = {
    async CreateCategory(req,res,next){

    // 1. validate user input
    const categoryRegisterSchema = Joi.object({
        title: Joi.string().max(30).required(),
        description: Joi.string().required(),
        slug: Joi.string().required(),
        inMenu: Joi.boolean().required(),
      });
      const { error } = categoryRegisterSchema.validate(req.body);
  
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {title,slug,description,inMenu} = req.body;
    
        

      const titleInUse = await Category.exists({ title });
  
        if (titleInUse) {
          const error = {
            status: 409,
            message: "Brand Already Exits!",
          };
  
          return next(error);
        }

         if(!req.files.image){
           return res.status(500).json({msg:'Category Image Required!'});  
         }

         const {response,updateImg} = await AWSService.uploadFile({name:req.files.image.name,data:req.files.image.data},'category/')
         if(response.$metadata.httpStatusCode === 200){
          try{
           const categoryToRegister = new Category({title,image: updateImg,description,slug: slug,inMenu:inMenu});
           await categoryToRegister.save();

           return res.status(200).json({status:200,msg:'Category Created Successfully!'});
          }catch(err){
            const error = {status:500,massage:"Internal Server Error!"}
            return next(error)
          }
        }else{
         const error = {
           status: 500,
           message: "AWS S3 Internal Server Error!"
         }
         return next(error)
        }
    },
    async updateCategoriesPosition(req,res,next){
  
      const data = req.body;
      // Create an array of update operations
      const updateOperations = data.map(({ _id, index }) => ({
        updateOne: {
            filter: { _id },
            update: { $set: { index } }
        }
      }));
      // Execute the bulk update operation
      try{
        const update  = await Category.bulkWrite(updateOperations)
        return res.status(200).json({status:200,msg:'Categories Position Updated!'});
      }catch(err){
        const error = {status:500,messge:"Internal Server Error!"}
          return next(error)
      }

     },

    async UpdateCategory(req,res,next){
      
      // 1. validate user input
      const categoryUpdateSchema = Joi.object({
          id: Joi.string().required(),
          title: Joi.string().max(30).required(),
          image: Joi.string().allow('').allow(null),
          oldImage: Joi.string().allow('').allow(null),
          inMenu: Joi.boolean().required(),
          description: Joi.string().required(),
          slug: Joi.string().required(),
        });
        const { error } = categoryUpdateSchema.validate(req.body);
    
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
  
        const {title,image,oldImage,inMenu,slug,description,id} = req.body;
        
        if(oldImage === ''){
          try {
              await Category.findByIdAndUpdate(
                id,
                {title,slug,inMenu,description},
                { new: true }
              );
      
              return res.status(200).json({status:200,msg:'Category Updated Successfully!'});
          
              } catch (error) {
                const err = {status:500,message:"Internal Server Error!"}
                return next(err);
              }
        }else{
          try{
            const {resp} = await AWSService.deleteFile(oldImage)
            
           if(resp.$metadata.httpStatusCode === 204){
             try{
               const {response,updateImg} = await AWSService.uploadFile({name:req.files.image.name,data:req.files.image.data},'category/')
               if(response.$metadata.httpStatusCode === 200){
                try{
                   await Category.findByIdAndUpdate(
                    id,
                    {title,slug,description,inMenu,image:updateImg},
                    { new: true }
                  );
                  return res.status(200).json({status: 200, msg:'Category Updated Successuly!'});
                 }catch(err){
                   const error = {status:500,message:"Internal Server Error!"}
                   return next(error)
                 }
               }
             }catch(error){
               const err = {status:500,message:"Cloud Internal Server Server!"} 
               return next(err)
             }

           }
          }catch(error){
           const err = {status:500,message:"Cloud Internal Server Server!"} 
           return next(err)
          }
        }
      },

    async DeleteCategory(req,res,next){
      const blogSchema = Joi.object({
        id: Joi.string().required(),
      });
      const { error } = blogSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {id} = req.body;

      let delImgs = [];
      let delSectionItems = [];
      let delSectionId;
      let catSection;
      let category;

      try{
       category = await Category.findOne({_id:id})
       if(!category){
        return res.status(404).json({status:404,message:'Invalid Category!'})
       }else{
        delImgs.push(category.image)
       }
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
      
      
      try{
      catSection = await categorySection.findOne({categorySlug:category.slug}).populate('sectionItemsId').exec()
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
      

     if(catSection){
      delSectionId = catSection._id
      if(catSection?.sectionItemsId.length > 0){
       catSection.sectionItemsId.forEach((item)=>{
         delImgs.push(item.image)
         delSectionItems.push(item._id)
       })
      }
     }
     
    const {resp} = await AWSService.deleteMultiFiles(delImgs)
    if(resp.$metadata.httpStatusCode !== 200){
      return res.status(500).json({status:500,message:"Cloud Internal Server Server!",error:error})
    }else{
      if(delSectionItems.length > 0){
       try{
        await sectionItem.deleteMany({
          _id: { $in: delSectionItems }
        });
       }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
      }
      if(delSectionId){
        try{
          await categorySection.findByIdAndDelete(delSectionId);
        }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}
      }

      try{
       await Category.findByIdAndDelete(category._id);
       return res.status(200).json({status:200,msg:'Category Deleted Successfully!'})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!',error:error})}

     }
    },
    async GetAllCategories(req,res,next){
      
      try{
        // const categories = await Category.find({}).select('title').select('image').select('inMenu').select('index');
        const categories = await Category.aggregate([
          {$lookup: {from: 'products', localField: 'slug',foreignField: 'category', as: 'products'}},
          {$addFields: {productCount: { $size: '$products' }}},
          {$project: {title: 1,image: 1,inMenu: 1,index: 1,productCount: 1}}
        ]);
        
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }
    },
    async GetCategories(req,res,next){
      
      try{
        const categories = await Category.find({}).select('title');
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }
    },
    async GetBlogBySlugWithCategories(req,res,next){


      let blog = {}
      let categories = []
      try{
        categories = await Category.find({}).select('title').select('slug');
      }catch(error){
        return next(error)
      }
      try{
        blog = await Blog.findOne({slug:req.body.slug});
      }catch(error){
        return next(error)
      }
      return res.status(200).json({status:200,categories:categories,blog:blog});
    },
    async GetCategoryById(req,res,next){
      const {id} = req.body;
  
      try{
        const category = await Category.find({_id:id});

          return res.status(200).json({status:200,category:category});
        }catch(error){
          return next(error)
        }
    }

}

module.exports = categoryController;
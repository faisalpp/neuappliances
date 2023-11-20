const Tip = require('../../models/applianceTips')
const Category = require('../../models/category')
const Joi = require('joi')
const RecentBlogDTO = require('../../dto/blog/recentBlog')
const AWSService = require('../../services/S3Upload')


const tipsController = {
    async createTip(req, res, next) {
      const blogSchema = Joi.object({
          title: Joi.string().required(),
          slug: Joi.string().required(),
          thumbnail: Joi.allow(null).empty(''),
          category: Joi.string().required(),
          content: Joi.string().required(),
          count: Joi.string().required(),
          metaTitle: Joi.allow(null).empty(''),
          metaDescription: Joi.allow(null).empty(''),
          metaKeywords: Joi.allow(null).empty(''),
        });
        const { error } = blogSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
        
        // 3. if email or username is already registered -> return an error
        const {title,slug,category,content,count,metaTitle,metaDescription,metaKeywords } = req.body;
        
        const slugInUse = await Tip.exists({ slug });        
        if (slugInUse) {
          const error = {
            status: 409, message:'Tip Already Exist!'
          }
          return next(error)
        }
        
        let img='';
        if(req.files?.thumbnail){
          const {response,updateImg} = await AWSService.uploadFile({name:req.files.thumbnail.name,data:req.files.thumbnail.data},'blog/')
         if(response.$metadata.httpStatusCode === 200){
          img = updateImg;
         }else{
           const error = {status: 500,message: "AWS S3 Internal Server Error!"}
           return next(error)
         }
       }

       try{
        const BlogToCreate = new Tip({title,slug,count,thumbnail:img,category,content,metaTitle,metaDescription,metaKeywords});
        await BlogToCreate.save();
        return res.status(200).json({status: 200, msg:'Tip Created Successuly!'});
       }catch(err){
         const error = {status:500,massage:"Internal Server Error!"}
         return next(error)
       }
  },

  async duplicateTip(req, res, next) {
    const blogSchema = Joi.object({
        slug: Joi.string().required(),
      });
      const { error } = blogSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }
      // 
      // 3. if email or username is already registered -> return an error
      const {slug} = req.body;
      
      let img ='';
      const blog = await Tip.findOne({ slug });  
      if (blog) {
       if(blog.thumbnail){
        const {resp,updateImg} = await AWSService.duplicateFile(blog.thumbnail,'tip/')
        if(resp.$metadata.httpStatusCode === 200){
         img = updateImg;
        }else{
          return res.status(500).json({status: 500, message:'AWS Cloud Internal Server Error!'});
        }
       }
       const title = blog.title + '(duplicate)';
       const slug = title.toLocaleLowerCase().replace(/\s/g,'-');
       try{
         const BlogToCreate = new Tip({title:title,slug:slug,thumbnail:img,count:blog.count,category:blog.category,content:blog.content,metaTitle:blog.metaTitle,metaDescription:blog.metaDescription,metaKeywords:blog.metaKeywords});
         await BlogToCreate.save();
         return res.status(200).json({status: 200, msg:'Blog Duplicate Created!'});
       }catch(err){
         const error = {status:500,message:"Internal Server Error!"}
         return next(error)
       }
      }else{
        return res.status(404).json({status: 404, message:'Blog Does Not Exist!'});
      }  
},

async updateTip(req, res, next) {
  const blogSchema = Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      slug: Joi.string().required(),
      thumbnail: Joi.string().allow(null).empty(''),
      tempImg: Joi.string().allow(null).empty(''),
      category: Joi.string().required(),
      isImg: Joi.boolean().required(),
      content: Joi.string().required(),
      count: Joi.string().required(),
      metaTitle: Joi.string().allow(null).empty(''),
      metaDescription: Joi.string().allow(null).empty(''),
      metaKeywords: Joi.string().allow(null).empty(''),
    });
    const { error } = blogSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }
    
    // 3. if email or username is already registered -> return an error
    const {id,title,slug,thumbnail,count,tempImg,isImg,category,content,metaTitle,metaDescription,metaKeywords } = req.body;
    const inUse = await Tip.exists({ _id:id });        
    if (!inUse) {
      const error = {
        status: 409, message:'Tip Not Found!'
      }
      return next(error)
    }


    let img = thumbnail;
    if(isImg === 'true'){
     if(tempImg){
      const {resp} = await AWSService.deleteFile(tempImg)
      if(resp.$metadata.httpStatusCode !== 200){
        const err = {status:500,message:"Cloud Internal Server Server!"};return next(err)
      }
     }else{
      const {response,updateImg} = await AWSService.uploadFile({name:req.files.thumbnail.name,data:req.files.thumbnail.data},'blog/')
      if(response.$metadata.httpStatusCode === 200){
       img = updateImg;
      }else{
        const err = {status:500,message:"Cloud Internal Server Server!"};return next(err)
      }
     }
    }

    // try {
    await Tip.findByIdAndUpdate(
      {_id:id},
      {title,slug,thumbnail:img,count,category,content,metaTitle,metaDescription,metaKeywords:JSON.parse(metaKeywords)},);
     return res.status(200).json({status:200,msg:'Tip Updated Successfully!'});
    // } catch (error) {
    //   const err = {status:500,message:"Internal Server Error!"}
    //   return next(err);
    // }
},

    async getRecentTips(req, res, next) {

        try{
          let page = Number(req.query.page)
          let limit = Number(req.query.limit)
  
          let skip = (page - 1) * limit;

          const tips = await Tip.find({}).skip(skip).limit(limit)
          const totalCount = await Tip.countDocuments();
          
          const RecentTips = [];
          for(let i=0;i < tips.length;i++){
            const tip = new RecentBlogDTO(tips[i]);      
            RecentTips.push(tip)
          }
          
          return res.status(200).json({status: 200, tips:RecentTips,totalCount:totalCount});
        }catch(error){
          return next(error)
        }

  },
  async getTipBySlug(req, res, next) {
    const tipSchema = Joi.object({
        slug: Joi.string().required(),
      });
      const { error } = tipSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {slug} = req.body;

      try{
        const tip = await Tip.findOne({slug:slug});        
        return res.status(200).json({status: 200, tip});
      }catch(error){
        return next(error)
      }

},
async getTipByCategory(req, res, next) {
  const tipSchema = Joi.object({
      category: Joi.string().required(),
    });
    const { error } = tipSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {category} = req.body;
    
    try{
      let page = Number(req.query.page)
      let limit = Number(req.query.limit)
      let skip = (page - 1) * limit;
      if(category !== 'all-categories'){
        const tips1 = await Tip.find({category:category}).skip(skip).limit(limit); 
        const RecentTips = [];
          for(let i=0;i < tips1.length;i++){
            const tip = new RecentBlogDTO(tips1[i]);      
            RecentTips.push(tip)
          }
          const totalCount = await Tip.countDocuments({category});
        return res.status(200).json({status: 200, tips:RecentTips,totalCount:totalCount});
      }else{
        const tips2 = await Tip.find({}).skip(skip).limit(limit); 
        const RecentTips = [];
          for(let i=0;i < tips2.length;i++){
            const tip = new RecentBlogDTO(tips2[i]);      
            RecentTips.push(tip)
          }
        const totalCount2 = await Tip.countDocuments();
        return res.status(200).json({status: 200, tips:RecentTips,totalCount:totalCount2});
      }
    }catch(error){
      return next(error)
    }

},
async deleteTip(req, res, next) {
  const tipSchema = Joi.object({
      id: Joi.string().required(),
    });
    const { error } = tipSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {id} = req.body;

    let tip;
    try{
     tip = await Tip.findOne({_id:id})
     if(!tip){
      return res.status(404).json({status:404,message:'Appliance Tip Not Found!'})
     }
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    
    if(tip.thumbnail){
      const {resp} = await AWSService.deleteFile(tip.thumbnail)
      if(resp.$metadata.httpStatusCode !== 204){
        const err = {status:500,message:"Cloud Internal Server Server!"} 
        return next(err)
      }
    }

    try{
      await Tip.findByIdAndDelete(id);
      return res.status(200).json({status: 200, msg:'Appliance Tip Deleted Successfully!'});    
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
},
async getTipBySearch(req, res, next) {
  const tipSchema = Joi.object({
      title: Joi.string().allow(null).empty(''),
    });
    const { error } = tipSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {title} = req.body;

    let queryObject = {};
    
    try{
      let page = Number(req.query.page)
      let limit = Number(req.query.limit)
      let skip = (page - 1) * limit;
      if(title){
        queryObject.title = {$regex:title,$options:"i"}
      }
      const tips = await Tip.find(queryObject).skip(skip).limit(limit); 
      
      const totalCount = await Tip.countDocuments();
      return res.status(200).json({status: 200, tips:tips,totalCount:totalCount});
    }catch(error){
      return next(error)
    }

},

 async getFourTips(req, res, next) {
     try{
       const tips = await Tip.find({}).limit(6); 
       const totalCount = await Tip.countDocuments();
       return res.status(200).json({status: 200, tips:tips,totalCount:totalCount});
     }catch(error){
       return next(error)
     }
 },


 async GetTipBySlugWithCategories(req,res,next){

  let blog = {}
  let categories = []
  try{
    categories = await Category.find({}).select('title').select('slug');
  }catch(error){
    return next(error)
  }
  try{
    blog = await Tip.findOne({slug:req.body.slug});
  }catch(error){
    return next(error)
  }
  return res.status(200).json({status:200,categories:categories,blog:blog});
},

}


module.exports = tipsController
  
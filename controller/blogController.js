const Blog = require('../models/blog')
const Joi = require('joi')
const RecentBlogDTO = require('../dto/blog/recentBlog')
const AWSService = require('../services/S3Upload')

const blogController = {
    async createBlog(req, res, next) {
        const blogSchema = Joi.object({
            title: Joi.string().required(),
            slug: Joi.string().required(),
            thumbnail: Joi.allow(null).empty(''),
            category: Joi.string().required(),
            content: Joi.string().required(),
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
          const {title,slug,category,content,metaTitle,metaDescription,metaKeywords } = req.body;
          
          const slugInUse = await Blog.exists({ slug });        
          if (slugInUse) {
            const error = {
              status: 409, message:'Blog Already Exist!'
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
          const BlogToCreate = new Blog({title,slug,thumbnail:img,category,content,metaTitle,metaDescription,metaKeywords});
          await BlogToCreate.save();
          return res.status(200).json({status: 200, msg:'Blog Created Successuly!'});
         }catch(err){
           const error = {status:500,massage:"Internal Server Error!"}
           return next(error)
         }
    },
    async duplicateBlog(req, res, next) {
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
        const blog = await Blog.findOne({ slug });  
        if (blog) {
         if(blog.thumbnail){
          const {resp,updateImg} = await AWSService.duplicateFile(blog.thumbnail,'blog/')
          if(resp.$metadata.httpStatusCode === 200){
           img = updateImg;
          }else{
            return res.status(500).json({status: 500, message:'AWS Cloud Internal Server Error!'});
          }
         }
         const title = blog.title + '(duplicate)';
         const slug = title.toLocaleLowerCase().replace(/\s/g,'-');
         try{
           const BlogToCreate = new Blog({title:title,slug:slug,thumbnail:img,category:blog.category,content:blog.content,metaTitle:blog.metaTitle,metaDescription:blog.metaDescription,metaKeywords:blog.metaKeywords});
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
    async updateBlog(req, res, next) {
      const blogSchema = Joi.object({
          id: Joi.string().required(),
          title: Joi.string().required(),
          slug: Joi.string().required(),
          thumbnail: Joi.string().allow(null).empty(''),
          tempImg: Joi.string().allow(null).empty(''),
          category: Joi.string().required(),
          isImg: Joi.boolean().required(),
          content: Joi.string().required(),
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
        const {id,title,slug,thumbnail,tempImg,isImg,category,content,metaTitle,metaDescription,metaKeywords } = req.body;
        const inUse = await Blog.exists({ _id:id });        
        if (!inUse) {
          const error = {
            status: 409, message:'Blog Not Found!'
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

        try {
        await Blog.findByIdAndUpdate(
          {_id:id},
          {title,slug,thumbnail:img,category,content,metaTitle,metaDescription,metaKeywords},);
         return res.status(200).json({status:200,msg:'Blog Updated Successfully!'});
        } catch (error) {
          const err = {status:500,message:"Internal Server Error!"}
          return next(err);
        }
  },
    async GetRecentBlogs(req, res, next) {

        try{
          let page = Number(req.query.page)
          let limit = Number(req.query.limit)
  
          let skip = (page - 1) * limit;

          const blogs = await Blog.find({}).skip(skip).limit(limit)
          const totalCount = await Blog.countDocuments();
          
          const RecentBlogs = [];
          for(let i=0;i < blogs.length;i++){
            const blog = new RecentBlogDTO(blogs[i]);      
            RecentBlogs.push(blog)
          }
          
          return res.status(200).json({status: 200, blogs:RecentBlogs,totalCount:totalCount});
        }catch(error){
          return next(error)
        }

  },
  async GetBlogBySlug(req, res, next) {
    const blogSchema = Joi.object({
        slug: Joi.string().required(),
      });
      const { error } = blogSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const {slug} = req.body;

      try{
        const blog = await Blog.findOne({slug:slug});        
        return res.status(200).json({status: 200, blog:blog});
      }catch(error){
        return next(error)
      }

},
async GetBlogByCategory(req, res, next) {
  const blogSchema = Joi.object({
      category: Joi.string().required(),
    });
    const { error } = blogSchema.validate(req.body);
    
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
        const blogs = await Blog.find({category:category}).skip(skip).limit(limit);     
        const totalCount = blogs.length
        return res.status(200).json({status: 200, blogs:blogs,totalCount:totalCount});
      }else{
        const blogs2 = await Blog.find({}).skip(skip).limit(limit); 
        const totalCount2 = await Blog.countDocuments();
        return res.status(200).json({status: 200, blogs:blogs2,totalCount:totalCount2});
      }
    }catch(error){
      return next(error)
    }

},
async DeleteBlog(req, res, next) {
  const blogSchema = Joi.object({
      id: Joi.string().required(),
    });
    const { error } = blogSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }

    const {id} = req.body;


    let blog;
    try{
     blog = await Blog.findOne({_id:id});
    }catch(error){return res.status(500).json({status: 500, message:'Internal Server Server!'})}
    
    if(!blog){
      return res.status(404).json({status:404,message:'Blog Not Found!'});     
    }

  
    if(blog.thumbnail){
     const {resp} = await AWSService.deleteFile(blog.thumbnail)
     if(resp.$metadata.httpStatusCode === 204){
      try{
        await Blog.findByIdAndDelete(id);
        return res.status(200).json({status: 200, msg:'Blog Deleted Successfully!'});     
       }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})} 
      }else{
        return res.status(500).json({status: 500, message:'Cloud Internal Server Server!'});
      }
    }


},
async GetBlogBySearch(req, res, next) {
  const blogSchema = Joi.object({
      title: Joi.string().allow(null).empty(''),
    });
    const { error } = blogSchema.validate(req.body);
    
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
      const blogs = await Blog.find(queryObject).skip(skip).limit(limit); 
      
      const totalCount = await Blog.countDocuments();
      return res.status(200).json({status: 200, blogs:blogs,totalCount:totalCount});
    }catch(error){
      return next(error)
    }

}


}

module.exports = blogController
  
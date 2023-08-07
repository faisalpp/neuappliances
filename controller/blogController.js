const Blog = require('../models/blog')
const Joi = require('joi')
const RecentBlogDTO = require('../dto/blog/recentBlog')
const AWS3 = require('@aws-sdk/client-s3')
const S3Client = require('../services/S3')
const { AWS_S3_USER_ACCESS_KEY,AWS_S3_USER_SECRET_ACCESS_KEY,AWS_S3_REGION,AWS_S3_BUCKET_NAME } = require('../config/index')

const blogController = {
    async createBlog(req, res, next) {
        const blogSchema = Joi.object({
            title: Joi.string().required(),
            slug: Joi.string().required(),
            thumbnail: Joi.allow(null).empty(''),
            category: Joi.string().required(),
            content: Joi.string().required(),
          });
          const { error } = blogSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
          
          // 3. if email or username is already registered -> return an error
          const {title,slug,thumbnail,category,content } = req.body;
          console.log(req.files.thumbnail.data)
          const titleInUse = await Blog.exists({ title });        
          if (titleInUse) {
            const error = {
              status: 409, message:'Blog Already Exist!'
            }
            return next(error)
          }
          
             const fileName = 'blog/' + Date.now() + '-' + req.files.thumbnail.name

             let uploadParams = {Key: fileName,Bucket: AWS_S3_BUCKET_NAME, Body: req.files.thumbnail.data}
             const command = new AWS3.PutObjectCommand(uploadParams)
             const response = await S3Client.send(command)
             
             if(response.$metadata.httpStatusCode === 200){
               try{
                const BlogToCreate = new Blog({title,slug,thumbnail:fileName,category,content});
                const blog = await BlogToCreate.save();
                return res.status(200).json({status: 200, msg:'Blog Created Successuly!'});
               }catch(err){
                 const error = {status:500,msg:"Internal Server Error!"}
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
    async GetRecentBlogs(req, res, next) {

        try{
          let page = Number(req.query.page)
          let limit = Number(req.query.limit)
  
          let skip = (page - 1) * limit;

          const blogs = await Blog.find({}).skip(skip).limit(limit);
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
        const blog = await Blog.find({slug:slug});        
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
    let blogs;
    try{
      if(!category === 'all-categories'){
        blogs = await Blog.find({category:category});        
      }else{
        blogs = await Blog.find({});        
      }
      return res.status(200).json({status: 200, blogs:blogs});
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
    
    try{
     const blog = await Blog.findByIdAndDelete(id);
     
     if(!blog){
       return res.status(500).json({status: 500, message:'Internal Server Error!'});
     }else{
      // Create an S3 instance
      const s3 = new AWS3.S3Client({credentials:{accessKeyId:AWS_S3_USER_ACCESS_KEY,secretAccessKey:AWS_S3_USER_SECRET_ACCESS_KEY},region:AWS_S3_REGION})

       const params = {
          Key: blog.thumbnail,
          Bucket: AWS_S3_BUCKET_NAME,
       };
       const command = new AWS3.DeleteObjectCommand(params);
       try{
         await s3.send(command)
        }catch(error){
         const err = {status:500,message:"Cloud Internal Server Server!"} 
         return next(err)
        }
        return res.status(200).json({status: 200, msg:'Blog Deleted Successfully!'});
        }        
      }catch(error){
      return next(error)
    }

}

}


module.exports = blogController
  
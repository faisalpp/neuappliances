const Blog = require('../models/blog')
const Joi = require('joi')
const RecentBlogDTO = require('../dto/blog/recentBlog')
const AWS3 = require('@aws-sdk/client-s3')
const S3Client = require('../services/S3')
const { AWS_S3_BUCKET_NAME, AWS_S3_REGION } = require('../config/index')

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
             const encFileName = encodeURIComponent(fileName)

             let uploadParams = {Key: fileName,Bucket: AWS_S3_BUCKET_NAME, Body: req.files.thumbnail.data}
             const command = new AWS3.PutObjectCommand(uploadParams)
             const response = await S3Client.send(command)
             const url = `https://${AWS_S3_BUCKET_NAME}.s3.${AWS_S3_REGION}.amazonaws.com/${encFileName}`;
             
             if(response.$metadata.httpStatusCode === 200){
               try{
                const BlogToCreate = new Blog({title,slug,thumbnail:encFileName,category,content});
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
          let i;
          let RecentBlogs;
          for(i=0;i < blogs.length;i++){
            RecentBlogs = new RecentBlogDTO(blogs[i]);      
          }
          return res.status(200).json({status: 200, blogs:RecentBlogs});
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
      console.log(blog)
      if(!blog){
        return res.status(500).json({status: 500, msg:'Internal Server Error!'});
      }else{
       const params = {
          Bucket: AWS_S3_BUCKET_NAME,
          Key: blog.thumbnail,
       };
       const command = new AWS3.DeleteObjectCommand(params);
       const response = await S3Client.send(command)
       console.log(response)
       return res.status(200).json({status: 200, msg:'Blog Deleted Successfully!'});
      }        
    }catch(error){
      return next(error)
    }

}

}


module.exports = blogController
  
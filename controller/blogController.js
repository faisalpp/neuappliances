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
    async duplicateBlog(req, res, next) {
      const blogSchema = Joi.object({
          slug: Joi.string().required(),
        });
        const { error } = blogSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
        
        // 3. if email or username is already registered -> return an error
        const {slug} = req.body;
        
        const blog = await Blog.findOne({ slug });  
        if (blog) {

          const s3 = new AWS3.S3Client({credentials:{accessKeyId:AWS_S3_USER_ACCESS_KEY,secretAccessKey:AWS_S3_USER_SECRET_ACCESS_KEY},region:AWS_S3_REGION})
          const newFileName = 'blog/' + Date.now() + '-' + 'dup-img'
          const copyParams = {
            Bucket: AWS_S3_BUCKET_NAME,
            CopySource: AWS_S3_BUCKET_NAME + '/' + blog.thumbnail,
            Key: newFileName
          };
          const command = new AWS3.CopyObjectCommand(copyParams);
          const response = await s3.send(command)
          if(response.$metadata.httpStatusCode === 200){
            const title = blog.title + '(Duplicate)';
            const slug = title.toLocaleLowerCase().replace(/\s/g,'-');
            try{
              const BlogToCreate = new Blog({title:title,slug:slug,thumbnail:newFileName,category:blog.category,content:blog.content});
              await BlogToCreate.save();
              return res.status(200).json({status: 200, msg:'Blog Duplicate Created!'});
            }catch(err){
              const error = {status:500,message:"Internal Server Error!"}
              return next(error)
            }
          }else{
            return res.status(500).json({status: 500, message:'AWS Cloud Internal Server Error!'});
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
          thumbnail: Joi.string().required() ,
          tempImg: Joi.string().allow(null).empty(''),
          category: Joi.string().required(),
          content: Joi.string().required(),
        });
        const { error } = blogSchema.validate(req.body);
        
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        }
        
        // 3. if email or username is already registered -> return an error
        const {id,title,slug,thumbnail,tempImg,category,content } = req.body;
        
        const inUse = await Blog.exists({ _id:id });        
        if (!inUse) {
          const error = {
            status: 409, message:'Blog Not Found!'
          }
          return next(error)
        }

        if(tempImg === ''){
          try {
              const updatedBlog = await Blog.findByIdAndUpdate(
                id,
                {title,slug,thumbnail,category,content},
                { new: true }
              );
      
              return res.status(200).json({status:200,msg:'Blog Updated Successfully!'});
          
              } catch (error) {
                const err = {status:500,msg:"Internal Server Error!"}
                return next(err);
              }
        }else{
          // First Delete old image
          const s3 = new AWS3.S3Client({credentials:{accessKeyId:AWS_S3_USER_ACCESS_KEY,secretAccessKey:AWS_S3_USER_SECRET_ACCESS_KEY},region:AWS_S3_REGION})
          const params = {
            Key: thumbnail,
            Bucket: AWS_S3_BUCKET_NAME,
          };
          const command = new AWS3.DeleteObjectCommand(params);
          try{
           const response = await s3.send(command)
           if(response.$metadata.httpStatusCode === 200){
             const newFileName = 'blog/' + Date.now() + '-' + req.files.thumbnail.name
             let uploadParams = {Key: fileName,Bucket: AWS_S3_BUCKET_NAME, Body: req.files.thumbnail.data}
             const command = new AWS3.PutObjectCommand(uploadParams)
             try{
               const resp = await S3Client.send(command)
               if(resp.$metadata.httpStatusCode === 200){
                try{
                  const BlogToCreate = new Blog({title,slug,thumbnail:newFileName,category,content});
                  const blog = await BlogToCreate.save();
                  return res.status(200).json({status: 200, msg:'Blog Updated Successuly!'});
                 }catch(err){
                   const error = {status:500,msg:"Internal Server Error!"}
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
    
    try{
     const blog = await Blog.findByIdAndDelete(id);
     
     if(!blog){
       return res.status(500).json({status: 500, message:'Internal Server Errora!'});
     }
      // Create an S3 instance
      const s3 = new AWS3.S3Client({credentials:{accessKeyId:AWS_S3_USER_ACCESS_KEY,secretAccessKey:AWS_S3_USER_SECRET_ACCESS_KEY},region:AWS_S3_REGION})

       const params = {
          Key: blog.thumbnail,
          Bucket: AWS_S3_BUCKET_NAME,
       };
       const command = new AWS3.DeleteObjectCommand(params);
       try{
         const res = await s3.send(command)
         if(res.$metadata.httpStatusCode === 200){
           return res.status(200).json({status: 200, msg:'Blog Deleted Successfully!'});    
         }
        }catch(error){
         const err = {status:500,message:"Cloud Internal Server Server!"} 
         return next(err)
        }
      }catch(error){
       return next(error)
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
  
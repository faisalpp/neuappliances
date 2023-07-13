const Blog = require('../models/blog')

const blogController = {
    async createBlog(req, res, next) {
        const blogSchema = Joi.object({
            title: Joi.string().min(10).max(100).required(),
            slug: Joi.string().min(10).max(100).required(),
            shortDescription: Joi.string().min(10).max(250).required(),
            thumbnail: Joi.string().required(),
            type: Joi.string().required(),
            category: Joi.string().required(),
            content: Joi.string().required(),
          });
          const { error } = blogSchema.validate(req.body);
          
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
      
          // 3. if email or username is already registered -> return an error
          const {title,slug,shortDescription,thumbnail,type,category,content } = req.body;

          const titleInUse = await Blog.exists({ title });        
          if (titleInUse) {
           const error = {
             status: 409,
             message: "Blog Already Exits!",
           };
           return next(error);
          }

          try{
           
            const BlogToCreate = new Blog({title,slug,shortDescription,thumbnail,type,category,content});
            
            const blog = await BlogToCreate.save();

          }catch(err){
            const error = {status:500,msg:"Internal Server Error!"}
            return next(error)
          }

    }

}


module.exports = blogController
  
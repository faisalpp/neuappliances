const VideoMedia = require('../models/videoMedia')
const Joi = require("joi");


const videoMediaController = {
    async uploadVideoMedia(req, res, next) {
        const uploadLoopSchema = Joi.object({
            url: Joi.string().required(),
            type: Joi.string().required(),
            section: Joi.string().required(),
            publicId: Joi.string().required(),
          });
          const { error } = uploadLoopSchema.validate(req.body);
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
    
          const {url,type,section} = req.body;
          
          try {

            const mediaToUpload = new VideoMedia({
                url,
                type,
                section,
                publicId
              });
    
        
             const data = await mediaToUpload.save();
    
            return res.status(200).json({status:200,msg:'Loop Video Uploaded Successfully!'});
        
            } catch (error) {
              return next(error);
            }
    },
    async getVideoMedia(req,res,next){
      const uploadLoopSchema = Joi.object({
        section: Joi.string().required(),
      });
      const { error } = uploadLoopSchema.validate(req.body);
       // 2. if error in validation -> return error via middleware
       if (error) {
        return next(error)
      }

      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 3;

      let skip = (page - 1) * limit;
      const {section} = req.body;
      
      try{
        const loops = await VideoMedia.find({section:section}).skip(skip).limit(limit);
        const totalCount = await VideoMedia.countDocuments();
        return res.status(200).json({status:200,loops:loops,count:loops.length,totalCount:totalCount});
      }catch(error){
        return next(error)
      }
    },
}

module.exports = videoMediaController
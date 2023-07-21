const Loop = require('../models/loop')
const Joi = require("joi");


const loopController = {
    async uploadLoopMedia(req, res, next) {
        const uploadLoopSchema = Joi.object({
            url: Joi.string().required(),
            type: Joi.string().required(),
            section: Joi.string().required(),
          });
          const { error } = uploadLoopSchema.validate(req.body);
          // 2. if error in validation -> return error via middleware
          if (error) {
            return next(error)
          }
    
          const {url,type,section} = req.body;
          
          try {

            const mediaToUpload = new Loop({
                url,
                type,
                section
              });
    
        
             const data = await mediaToUpload.save();
    
            return res.status(200).json({status:200,msg:'Loop Video Uploaded Successfully!'});
        
            } catch (error) {
              return next(error);
            }
    },
    async getLoopMedia(req,res,next){
      const uploadLoopSchema = Joi.object({
        type: Joi.string().required(),
      });
      const { error } = uploadLoopSchema.validate(req.body);
       // 2. if error in validation -> return error via middleware
       if (error) {
        return next(error)
      }

      let page = Number(req.query.page);
      let limit = Number(req.query.limit);

      let skip = (page - 1) * limit;

      try{
        const loops = await Loop.find({}).skip(skip).limit(limit);
        const totalCount = await Loop.countDocuments();
        return res.status(200).json({status:200,loops:loops,count:loops.length,totalCount:totalCount});
      }catch(error){
        return next(error)
      }
    },
}

module.exports = loopController
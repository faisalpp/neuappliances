const Refund = require("../models/refund");
const Joi = require("joi");
const AWS3 = require('../services/S3Upload')


const refundController = {
    async refundRequest(req,res,next){
      const refundSchema = Joi.object({
          orderNo: Joi.string().required(),
          name: Joi.string().required(),
          email: Joi.string().required(),
          phone: Joi.string().required(),
          amount: Joi.string().required(),
          media: Joi.array().allow(null),
      });
      const { error } = refundSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }

      const { orderNo,name,email,phone,amount,media} = req.body;
     
      try{
       const refundObj = new Refund({ orderNo:orderNo, name:name, email:email, phone:phone, amount:amount, media:media})
       await refundObj.save()
       return res.status(200).json({status:200,msg:'Refund Request Sent!'})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    
    },
    
    async getRefundRequests(req,res,next){

      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 3;
      
      let skip = (page - 1) * limit;

      try{
       const refunds = await Refund.find({}).skip(skip).limit(limit);
       const totalCount = await Refund.countDocuments()
       return res.status(200).json({status:200,refunds:refunds,totalCount:totalCount})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    },

    async updateRefund(req,res,next){

      const {id,orderNo,name,phone,amount,email,status} = req.body;

      try{
       await Refund.findOneAndUpdate({_id:id},{orderNo:orderNo,name:name,phone:phone,amount:amount,email:email,status:status});
       return res.status(200).json({status:200,msg:'Refund Updated Successfully!'})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    },

    async deleteRefund(req,res,next){

      const {id} = req.body;

      if(!id){
       return res.status(500).json({status:500,message:'Internal Server Error!'})
      }
      
      const refund = await Refund.findOne({_id:id}) 
      
      const media = refund.media;
      let delMedia = [];

      if(media?.length > 0){
        for(let i=0;i<media.length;i++){
          delMedia.push(media[i].data)
          // console.log(delMedia[i].data)
        }
      }

      if(delMedia.length > 0){
        const {resp} = await AWS3.deleteMultiFiles(delMedia)
        if(resp.$metadata.httpStatusCode === 200){
          await Refund.findOneAndDelete({_id:id});
          return res.status(200).json({status:200,msg:'Refund Deleted Successfully!'})
        }else{
          return res.status(500).json({message:'AWS Internal Server Error!'});
        }
      }else{
       await Refund.findOneAndDelete({_id:id});
       return res.status(200).json({status:200,msg:'Refund Deleted Successfully!'})
      }
    },

    async searchRefund(req,res,next){
        const orderSchema = Joi.object({
         query: Joi.string().required(),
        });
        const { error } = orderSchema.validate(req.body);
       
        // 2. if error in validation -> return error via middleware
        if (error) {
          return next(error)
        };
     
        const {query} = req.body;
         try{
         const result = await Refund.find({ orderNo: { $regex: query, $options: 'i' } })
          return res.status(200).json({status: 200,refunds:result});
         }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    },

}

module.exports = refundController;
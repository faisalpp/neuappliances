const AWSService = require('../services/S3Upload')

const uploadController = {
    async uploadImage(req,res,next){
     const file = req.files.media
     if(!file){
        return res.status(500).json({status: 500, msg:'Media File Required!'});
     }
     const location = req.body.location
    const {response,updateImg} = await AWSService.uploadFile({name:file.name,data:file.data},location)
    if(response.$metadata.httpStatusCode === 200){
     return res.status(200).json({status: 200, url:updateImg});
    }else{
     return res.status(500).json({status: 500, msg:'AWS Internal Server Error!'});
    }
   },
   
   async deleteMedia(req,res,next){

    const {url} = req.body

   //  try{
     const {resp} = await AWSService.deleteFile(url)
     if(resp.$metadata.httpStatusCode === 204){
       return res.status(200).json({status: 200, msg:'Media Deleted Successfully!'});    
     }
   //  }catch(error){
   //   const err = {status:500,message:"AWS Internal Server Server!"} 
   //   return next(err)
   //  }
   },

   async uploadUserMedia(req,res,next){
     const file = req.files?.media
     if(!file){
        return res.status(500).json({status: 500, message:'Media File Required!'});
     }
     const location = req.body.location
    const {response,updateImg} = await AWSService.uploadFile({name:file.name,data:file.data},location)
    if(response.$metadata.httpStatusCode === 200){
     return res.status(200).json({status: 200, url:updateImg});
    }else{
     return res.status(500).json({status: 500, message:'AWS Internal Server Error!'});
    }
   },
   
   async deleteUserMedia(req,res,next){

    const {url} = req.body

    try{
     const {resp} = await AWSService.deleteFile(url)
     if(resp.$metadata.httpStatusCode === 204){
       return res.status(200).json({status: 200, msg:'Media Deleted Successfully!'});    
     }
    }catch(error){
     const err = {status:500,message:"AWS Internal Server Server!"} 
     return next(err)
    }
   },

}

module.exports = uploadController
const Joi = require('joi')
const Gallery = require('../models/gallery')
const { CLOUDINARY_CLOUD_NAME,CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET} = require('../config/index')
const axios = require('axios')
const cloudinary = require('cloudinary').v2;

const galleryController = {
  async uploadGalleryImage(req, res, next) {

    const image = req.files.image;
    
    const formData = new FormData()
    formData.append('file',`data:${image.mimetype};base64,${image.data.toString('base64')}`);
    formData.append('folder','Gallery');
    formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET)
    axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,formData)
     .then(resp=>{ 
       const newImage = new Gallery({
        imageUrl:resp.data.secure_url,
        publicId:resp.data.public_id,
      });
     
      newImage.save();
      return res.status(200).json({ status: 200, msg: 'Image Uploaded Successfully!' });
    }).catch(err=>{
        console.log(err)
         return res.status(500).json({ status: 500, msg: 'Failed to upload image to Cloudinary' });
     })

 },
 async getGalleryImage(req, res, next) {

    try{
        let page = Number(req.query.page) || 0;
        let limit = Number(req.query.limit) || 0;

        let skip = (page - 1) * limit;

        const gallery = await Gallery.find({}).skip(skip).limit(limit);
        const totalCount = await Gallery.countDocuments();
        return res.status(200).json({status:200,gallery:gallery,totalCount:totalCount});
    }catch(error){
        return next(error)
    }

 },
 
 async deleteGalleryImage(req, res, next) {
 
  // Configure Cloudinary
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET 
  });

  const { publicId } = req.params;

  // Delete the image from Cloudinary
  cloudinary.uploader.destroy(publicId, (error, result) => {
    if (error) {
      return res.status(500).json({ status:500,message: 'Failed to delete image' });
    }

    // Image deleted successfully
    return res.status(200).json({ status:200,msg: 'Image deleted successfully' });
  });

 }


}

module.exports = galleryController
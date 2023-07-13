const fs = require('fs')

const uploadController = {
    async uploadImage(req,res,next){
      const { type } = req.body;
      const file = req.files.file;
     
     if(type === 'images'){
      let imagePath = `storage/uploads/images/${Date.now()}-${file.name}`;
      file.mv(imagePath, (error) => {
       if (error) {
        const err = { status: 500, message: `Failed to store image: ${error}` };
       }
      });
    }else{
         let imagePath = `storage/uploads/videos/${Date.now()}-${file.name}`;
         file.mv(imagePath, (error) => {
          if (error) {
           const err = { status: 500, message: `Failed to store video: ${error}` };
          }
         });
     }

      res.status(200).send({status:200,msg:'File Uploaded Successfully!'});
    },
    async getMedia(req,res,next){
    
    const { type } = req.body;
    
    if(type === 'images'){
     const folderPath = 'storage/uploads/images'; // Replace with the actual folder path
     fs.readdir(folderPath, (err, files) => {
      if (err) {
          return res.status(500).send('Error reading folder');
         }
        res.status(200).send({status:200,files:files});
     });
    }else{
     const folderPath = 'storage/uploads/videos'; // Replace with the actual folder path
     fs.readdir(folderPath, (err, files) => {
      if (err) {
       return res.status(500).send('Error reading folder');
      }
      res.status(200).send({status:200,files:files});
     });
    }
    

},
async deleteMedia(req,res,next){

 const {file,type} = req.body;
 
 if(type === 'images'){
  const filePath = `storage/uploads/images/${file}`; // Replace with the actual file path 
  fs.unlink(filePath, (err) => {
      if (err) {
          const error = {
              status: 500,
              message:'Internal Server Error!'
             }
             return next(error)
         }
         res.status(200).send({status:200,message:'Image Deleted Successfully!'});
     })
   }else{
    const filePath = `storage/uploads/videos/${file}`; // Replace with the actual file path 
    fs.unlink(filePath, (err) => {
        if (err) {
            const error = {
                status: 500,
                message:'Internal Server Error!'
               }
               return next(error)
           }
       })
       res.status(200).send({status:200,message:'Video Deleted Successfully!'});
   }
 
 },

}

module.exports = uploadController
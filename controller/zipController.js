const {POSTMAN_ZIP_CODE_API_HOST,POSTMAN_ZIP_CODE_API_KEY} = require('../config/index')
const ZipCode = require('../models/zipCode')
const axios = require('axios');
const ZipTransform = require('../services/zipTransform')

const zipController = {
    async getZipCords(req, res, next) {

     const zip = req.query.zip; 
     console.log(zip)

    if(!zip){
     return next({status: 401,message:"ZipCode Required!"})
    }
    
    if(zip.length < 5){
      return next({status: 401,message:"ZipCode Should 5 Digit Long!"})
    }

    let url = `${POSTMAN_ZIP_CODE_API_HOST}/web-api/delivery/nearest-slot`
    const params = {start_date:'2023-04-19',zip:zip};
    const TOKEN=`Bearer ${POSTMAN_ZIP_CODE_API_KEY}`
    let isZip = false;
    try{
      const res2 = await axios.get(url, { params, headers: {'Authorization': TOKEN} })
      if(res2.data.location.zip === zip){
        isZip = true
      }
    }catch(err){
      console.log(err)
      return next({status: 500})
    }

    if(isZip){
      const getZip = await ZipCode.findOne({zipCode:zip});
      if(getZip){
        return res.status(200).send({status:200,cords:JSON.parse(getZip.cords),zoom:getZip.zoom})
      }else{
        try{
         const data = await ZipTransform(zip)
         // Create Backup for cords
         const zipToCreate = new ZipCode({
           zipCode:zip,
           cords: JSON.stringify(data.cords),
           raw: JSON.stringify(data.raw),
           country: data.country,
           city: data.city,
           state: data.state
         });
         await zipToCreate.save();
         return res.status(200).send({cords:data.cords,zoom:10})
        }catch(error){
          console.log(error)
          return next({status: 500,message:'Internal Server Error'})
        }

      }
    }

    },

    async getAllZipCords(req, res, next) {
      try{
       const zips = await ZipCode.find({});
       return res.status(200).send({zips:zips})
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
    },
    async getSingleZipCords(req, res, next) {
      try{
       const zip = await ZipCode.findOne({_id:req.query.id});
       return res.status(200).send({_id:zip._id,zipCode:zip.zipCode,country:zip.country,state:zip.state,city:zip.city,raw:zip.raw,zoom:zip.zoom})
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
    },
    async deleteZipCords(req, res, next) {
      try{
        await ZipCode.findByIdAndDelete(req.query.id)
        return res.status(200).send({msg:'ZipCode Deleted!'})
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})} 
    },
    async createZipCords(req, res, next) {
      const zip = req.body.zip; 

      if(!zip){
       return next({status: 401,message:"ZipCode Required!"})
      }
      
      if(zip.length < 5){
        return next({status: 401,message:"ZipCode Should 5 Digit Long!"})
      }
     
     let url = `${POSTMAN_ZIP_CODE_API_HOST}/web-api/delivery/nearest-slot`
     const params = {start_date:'2023-04-19',zip:zip};
     const TOKEN=`Bearer ${POSTMAN_ZIP_CODE_API_KEY}`
     
     let isZip = false;
      try{
        const res2 = await axios.get(url, { params, headers: {'Authorization': TOKEN} })
        if(res2.data.location.zip === zip){
          isZip = true
        }
      }catch(err){
        console.log(err)
        return next({status: 500})
      }
  
      if(isZip){
        const getZip = await ZipCode.findOne({zipCode:zip});
        if(getZip){
          return res.status(500).send({status:500,message:'Zip Code Already Exist!'})
        }else{
          try{
           const data = await ZipTransform(zip)
           // Create Backup for cords
           const zipToCreate = new ZipCode({
             zipCode:zip,
             cords: JSON.stringify(data.cords),
             raw: JSON.stringify(data.raw),
             country: data.country,
             city: data.city,
             state: data.state
           });
           await zipToCreate.save();
           return res.status(200).send({msg:'Zip Code Added!'})
          }catch(error){
            console.log(error)
            return next({status: 500,message:'Internal Server Error'})
          }
  
        }
      }
    },
    async updateZipCords(req, res, next) {
      
      const {id,zipCode,country,state,city,raw,zoom,isRaw} = req.body;
      console.log(req.body.id)
      if(isRaw){
        const data = JSON.parse(raw)
      // Swap the elements in each inner array
      for (const innerArray of data) {
        [innerArray[0], innerArray[1]] = [innerArray[1], innerArray[0]];
      }
      // Initialize an empty array for transformed data
      const transformedData = [];
    
      // Transform the data into the desired format
      for (const pair of data) {
        transformedData.push({ "lat": pair[0], "lng": pair[1] });
      }
      }

      try{
        if(isRaw){
          await ZipCode.findByIdAndUpdate(
          id,
          {zipCode:zipCode,country:country,state:state,city:city,cords:JSON.stringify(transformedData),raw:raw,zoom:zoom},
          { new: true }
        );
      }else{
          await ZipCode.findByIdAndUpdate(
          id,
          {zipCode:zipCode,country:country,state:state,city:city,zoom:zoom},
          { new: true }
        );
        }
        return res.status(200).send({msg:'ZipCode Updated!'})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})} 
    }
}

module.exports = zipController
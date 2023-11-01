const Category = require("../models/category");
const categorySection = require("../models/categorySection");
const Product = require("../models/product");
const Joi = require("joi");
const AWS3 = require('../services/S3Upload')

const productController = {
    async CreateProduct(req,res,next){
      const productSchema = Joi.object({
          productType: Joi.string().required(),
          title: Joi.string().required(),
          slug: Joi.string().required(),
          category: Joi.string().required(),
          feature: Joi.allow(null).empty(''),
          type: Joi.allow(null).empty(''),
          color: Joi.allow(null).empty(''),
          brand: Joi.allow(null).empty(''),
          fuelType: Joi.allow(null).empty(''),
          regPrice: Joi.string().required(),
          salePrice: Joi.allow(null).empty(''),
          lowPrice: Joi.string().required(),
          highPrice: Joi.string().required(),
          rating: Joi.string().required(),
          stock: Joi.string().required(),
          modelNo: Joi.string().required(),
          itemId: Joi.string().required(),
          featureVideo: Joi.string().required(),
          keyFeatures:Joi.string().required(),
          threeSixty: Joi.string().required(),
          media: Joi.string().required(),
          tags: Joi.string().required(),
          description: Joi.string().required(),
          specification: Joi.string().required(),
          deliveryInfo: Joi.string().required(),
          metaTitle: Joi.string().allow(null),
          metaDescription: Joi.string().allow(null),
          metaKeywords: Joi.string().allow(null),
      });
      const { error } = productSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }
      // 3. if email or username is already registered -> return an error
      const { productType, title, slug, category, feature, type, color, brand, fuelType, regPrice, salePrice, lowPrice, highPrice, rating, stock, modelNo , itemId, keyFeatures, featureVideo, threeSixty, media, tags, description, specification, deliveryInfo, metaTitle, metaDescription, metaKeywords} = req.body;
      
      const titleInUse = await Product.exists({ title });        
      if (titleInUse) {
        const error = {
          status: 409, message:'Product Already Exist!'
        }
        return next(error)
      }

      const metaKeywordsArray = JSON.parse(metaKeywords);
      const updateMetaKeyWords = metaKeywordsArray.join(', '); 

      try{
        const ProductToCreate = new Product({
          productType, 
          title, 
          slug, 
          category,
          feature, 
          type,
          color, 
          brand, 
          fuelType, 
          regPrice,
          salePrice, 
          lowPrice,
          highPrice,
          rating,
          stock,
          modelNo,
          itemId,
          keyFeatures:JSON.parse(keyFeatures),
          featureVideo:JSON.parse(featureVideo),
          threeSixty:JSON.parse(threeSixty),
          media:JSON.parse(media),
          tags:JSON.parse(tags),
          description,
          specification,
          deliveryInfo,
          metaTitle,
          metaDescription, 
          metaKeywords: updateMetaKeyWords,
        });
        await ProductToCreate.save();
        return res.status(200).json({status: 200, msg:'Product Created Successfully!'});
       }catch(err){
         const error = {status:500,massage:"Internal Server Error!"}
         return next(error)
       }

    },
    async UpdateProduct(req,res,next){
      const productSchema = Joi.object({
          pSlug: Joi.string().required(),
          productType: Joi.string().required(),
          title: Joi.string().required(),
          slug: Joi.string().required(),
          category: Joi.string().required(),
          feature: Joi.allow(null).empty(''),
          type: Joi.allow(null).empty(''),
          color: Joi.allow(null).empty(''),
          brand: Joi.allow(null).empty(''),
          fuelType: Joi.allow(null).empty(''),
          regPrice: Joi.number().required(),
          salePrice: Joi.number().empty(''),
          lowPrice: Joi.number().required(),
          highPrice: Joi.number().required(),
          rating: Joi.number().required(),
          stock: Joi.number().required(),
          modelNo: Joi.string().required(),
          itemId: Joi.string().required(),
          featureVideo: Joi.string().required(),
          keyFeatures:Joi.string().required(),
          threeSixty: Joi.string().required(),
          media: Joi.string().required(),
          tags: Joi.string().required(),
          description: Joi.string().required(),
          specification: Joi.string().required(),
          deliveryInfo: Joi.string().required(),
          metaTitle: Joi.string().allow(null),
          metaDescription: Joi.string().allow(null),
          metaKeywords: Joi.string().allow(null),
      });
      const { error } = productSchema.validate(req.body);
      
      // 2. if error in validation -> return error via middleware
      if (error) {
        return next(error)
      }
      // 3. if email or username is already registered -> return an error
      const { pSlug,productType, title, slug, category, feature, type, color, brand, fuelType, regPrice, salePrice, lowPrice, highPrice, rating, stock, modelNo , itemId, keyFeatures, featureVideo, threeSixty, media, tags, description, specification, deliveryInfo, metaTitle, metaDescription, metaKeywords} = req.body;
      
      const isProduct = await Product.find({slug:pSlug});        
      if (!isProduct) {
        const error = {
          status: 409, message:'Product Not Found!'
        }
        return next(error)
      }

      const metaKeywordsArray = JSON.parse(metaKeywords);
      const updateMetaKeyWords = metaKeywordsArray.join(', '); 
      try{
      await Product.findOneAndUpdate(
        {slug:pSlug},
        {
          productType, 
          title, 
          slug, 
          category,
          feature, 
          type,
          color, 
          brand, 
          fuelType, 
          regPrice,
          salePrice, 
          lowPrice,
          highPrice,
          rating,
          stock,
          modelNo,
          itemId,
          keyFeatures:JSON.parse(keyFeatures),
          featureVideo:JSON.parse(featureVideo),
          threeSixty:JSON.parse(threeSixty),
          media:JSON.parse(media),
          tags:JSON.parse(tags),
          description,
          specification,
          deliveryInfo,
          metaTitle,
          metaDescription, 
          metaKeywords: updateMetaKeyWords,
        }, 
        { new: true }
      );
        return res.status(200).json({status: 200, msg:'Product Updated Successfully!'});
       }catch(err){
         const error = {status:500,massage:"Internaql Server Error!"}
         return next(error)
       }

    },

    async GetProducts(req,res,next){
      
      try{
        const products = await Product.find({});
        
        // const productDto = new ProductDto(products)
        // let productsDTOs=[];
        // productDto.forEach((product) => {
        //   const productDTO = new ProductDto(product);
        //   productsDTOs.push(productDTO);
        // });
        // console.log(productsDTOs)

        return res.status(200).json({status:200,products:products});
      }catch(error){
        return next(error)
      }
    },

    async DuplicateProduct(req,res,next){
      const productSchema = Joi.object({
       pSlug: Joi.string().required(),
     });
    const { error } = productSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }
    // 3. if email or username is already registered -> return an error
    const { pSlug} = req.body;
    
    const product = await Product.findOne({slug:pSlug});        
    if (!product) {
      const error = {
        status: 409, message:'Product Not Found!'
      }
      return next(error)
    }

    let newKeyFeatures = [];
    let newFeatureVideo = {};
    let newMedia = []
    if(product.productType === 'parent'){
      const keyFeatures = product.keyFeatures
     for(let i=0;i < keyFeatures.length;i++){
       if(keyFeatures[i].media.type === 'upload'){
         const {resp,updateImg} = await AWS3.duplicateFile(keyFeatures[i].media.data,`product/${keyFeatures[i].media.file}s/`)
         if(resp.$metadata.httpStatusCode === 200){
           newKeyFeatures.push({title:keyFeatures[i].title,description:keyFeatures[i].description,media:{file:keyFeatures[i].media.file,type:keyFeatures[i].media.type,data:updateImg}})
         }else{
          return res.status(500).json({message:'AWS Internal Server Error!'});
         }
       }else{
        newKeyFeatures.push(keyFeatures[i])
       }
      }
 
      if(product.featureVideo.type === 'upload'){
       const {resp,updateImg} = await AWS3.duplicateFile(product.featureVideo.data,`product/${product.featureVideo.type}s/`)
       if(resp.$metadata.httpStatusCode === 200){
        newFeatureVideo.type = product.featureVideo.type
        newFeatureVideo.data = updateImg
        newFeatureVideo.prevImg = ''
       }
      }else{
       newFeatureVideo = product.featureVideo
      }

     const medias = product.media
     for(let j=0;j < medias.length;j++){
       if(medias[j].type === 'upload'){
        const {resp,updateImg} = await AWS3.duplicateFile(medias[j].data,`product/${medias[j].file}s/`)
        if(resp.$metadata.httpStatusCode === 200){
          newMedia.push({file:medias[j].file,type:medias[j].type,data:updateImg})
        }else{
         return res.status(500).json({message:'AWS Internal Server Error!'});
        }
       }else{
        newMedia.push(medias[j])
       }
     }
    }

    const uTitle = product.title + ' (duplicate)';
    const uSlug = uTitle.toLowerCase().replace(/\s/g,'-');

    try{
      const ProductToCreate = new Product({
        productType:product.productType, 
        title:uTitle, 
        slug:uSlug, 
        category:product.category,
        feature:product.feature, 
        type:product.type,
        color:product.color, 
        brand:product.brand, 
        fuelType:product.fuelType, 
        regPrice:product.regPrice,
        salePrice:product.salePrice, 
        lowPrice:product.lowPrice,
        highPrice:product.highPrice,
        rating:product.rating,
        stock:product.stock,
        modelNo:product.modelNo,
        itemId:product.itemId,
        keyFeatures:newKeyFeatures,
        featureVideo:newFeatureVideo,
        threeSixty:product.threeSixty,
        media:newMedia,
        tags:product.tags,
        description:product.description,
        specification:product.specification,
        deliveryInfo:product.deliveryInfo,
        metaTitle:product.metaTitle,
        metaDescription:product.metaDescription, 
        metaKeywords: product.metaKeywords,
      });
      await ProductToCreate.save();
      return res.status(200).json({status: 200, msg:'Product Dupliacated Successfully!'});
     }catch(err){
       const error = {status:500,massage:"Internal Server Error!"}
       return next(error)
     }
  },

  async DeleteProduct(req,res,next){
    const productSchema = Joi.object({
     pSlug: Joi.string().required(),
   });
  const { error } = productSchema.validate(req.body);
  
  // 2. if error in validation -> return error via middleware
  if (error) {
    return next(error)
  }
  // 3. if email or username is already registered -> return an error
  const { pSlug} = req.body;
  
  const product = await Product.findOne({slug:pSlug});        
  if (!product) {
    const error = {
      status: 409, message:'Product Not Found!'
    }
    return next(error)
  }

  let delMedia = [];

  if(product.productType === 'parent'){
   const keyFeatures = product.keyFeatures
   for(let i=0;i < keyFeatures.length;i++){
     if(keyFeatures[i].media.type === 'upload'){
       delMedia.push(keyFeatures[i].media.data)
     }
   }
  //  console.log(product)
   if(product.featureVideo.type === 'upload'){
     delMedia.push(product.featureVideo.data)
   }

   const medias = product.media
   for(let j=0;j < medias.length;j++){
     if(medias[j].type === 'upload'){
       delMedia.push(medias[j].data)
     }
   }
  
  }
  if(delMedia.length > 0){
    const {resp} = await AWS3.deleteMultiFiles(delMedia)
    if(resp.$metadata.httpStatusCode === 200){
      await Product.findByIdAndDelete(product._id)
      return res.status(200).json({status:200,msg:'Product Deleted!'});
    }else{
      return res.status(500).json({message:'AWS Internal Server Error!'});
    }
  }else{
    await Product.findByIdAndDelete(product._id)
    return res.status(200).json({status:200,msg:'Product Deleted!'});
  }
},

    async GetCategories(req,res,next){
      
      try{
        const categories = await Category.find({});
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }
    },
    
    async GetCategoryData(req,res,next) {
      const {categorySlug} = req.body;
      
      categorySection.find({ categorySlug: categorySlug,type:{$in:['types','features','finishes-&-colors','brands','fuel-types']} })
      .populate('sectionItemsId')
      .exec()
      .then(data => {
        const types = data.filter(item => item.type === 'types');
        const features = data.filter(item=>item.type === 'features');
        const colors = data.filter(item=>item.type === 'finishes-&-colors');
        const brands = data.filter(item=>item.type === 'brands');
        const fuelTypes = data.filter(item=>item.type === 'fuel-types');
        return res.status(200).json({status:200,types,features,colors,brands,fuelTypes});
      })
      .catch(err => {
          return res.status(500).json({message:'Internal Server Error!'});
      });
    },

    async GetParentModelNumbers(req,res,next){
          // 1. validate user input
    const productSchema = Joi.object({
      category:  Joi.string().required(),
     });
     const { error } = productSchema.validate(req.body);
     
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
      try{
        const modelNos = await Product.find({ category: req.body.category,productType:'parent' }).distinct("modelNo");
        return res.status(200).json({status:200,modelNos});
      }catch(error){
        return res.status(500).json({message:'Internal Server Error!'});
      }
    },

    async GetAllModelNumbers(req,res,next){
      // 1. validate user input
    const productSchema = Joi.object({
      category:  Joi.string().required(),
     });
     const { error } = productSchema.validate(req.body);
     
     // 2. if error in validation -> return error via middleware
     if (error) {
       return next(error)
     }
      try{
        const allModelNos = await Product.find({ category: req.body.category }).distinct("modelNo");
        return res.status(200).json({status:200,allModelNos:allModelNos});
      }catch(error){
        return res.status(500).json({message:'Internal Server Error!'});
      }
    }

    

}

module.exports = productController;
const Category = require("../models/category");
const Product = require("../models/product");
const categorySection = require("../models/categorySection");
const sectionItem = require("../models/sectionItem");

const applianceController = {
    async GetAppliances(req,res,next){
      let categories;
      try{
        if(req.query.limit !== 'all'){
          categories = await Category.find({}).limit(req.query.limit);
        }else{
          categories = await Category.find({}).sort({ index: 1 });;
        }
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }      
    },
    async GetNavbarAppliances(req,res,next){
      try{
        const  categories = await Category.find({inMenu:true});
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }      
    },
    async GetApplianceSections(req,res,next){
      const {slug} = req.body;
      const category = await Category.findOne({slug:slug})
      
      categorySection.find({ categorySlug: slug })
      .sort({ index: 1 })
      .populate('sectionItemsId')
      .exec()
      .then(categorySections => {
        // categorySections will contain an array of CategorySection documents
        categorySections.forEach(section => {
          section.sectionItemsId.sort((a, b) => a.index - b.index);
        });
        return res.status(200).json({status:200,categorySections:categorySections,categoryDescription:category.description,categoryTitle:category.title});
      })
      .catch(err => {
        return res.status(500).json({status:500,massage:"Internal Server Error!"});
      });

    },
    async GetApplianceBySlug(req,res,next){
      const {slug} = req.body;

      let product;
      try{
        product = await Product.findOne({slug:slug});
      }catch(error){
        return next(error)
      }
      
      let threeStar;
      let fourStar;
      let fiveStar;
      let keyFeatures = {};
      if(product){
        try{
          threeStar = await Product.findOne({productType:{$ne:'parent'},modelNo:product.modelNo,rating:3}).sort({ createdAt: 1 }).select('title').select('slug').select('rating').select('isSale').select('salePrice').select('regPrice').select('media').select('modelNo').select('itemId');
        }catch(error){
          return next(error)
        }
        try{
          fourStar = await Product.findOne({productType:{$ne:'parent'},modelNo:product.modelNo,rating:4}).sort({ createdAt: 1 }).select('title').select('slug').select('rating').select('isSale').select('salePrice').select('regPrice').select('media').select('modelNo').select('itemId');
        }catch(error){
          return next(error)
        }
        try{
          fiveStar = await Product.findOne({productType:{$ne:'parent'},modelNo:product.modelNo,rating:5}).sort({ createdAt: 1 }).select('title').select('slug').select('rating').select('isSale').select('salePrice').select('regPrice').select('media').select('modelNo').select('itemId');
        }catch(error){
          return next(error)
        }
      if(product.productType === 'variant'){
        try{
         const prd = await Product.findOne({modelNo:product.modelNo,productType:'parent'}).select('keyFeatures')
         keyFeatures = prd.keyFeatures;
        }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
      }
      return res.status(200).json({status:200,product:product,threeStar:threeStar,fourStar:fourStar,fiveStar:fiveStar,keyFeatures:keyFeatures});
     
    }else{
      return res.status(404).json({status:404,msg:"Product Not Found!"});
    }
    
    
    },
    async GetApplianceWithBuyingOptions(req,res,next){
      
      let query = req.body
      
      if(!query.modelNo){
        
        return res.status(404).json({status:404});
      }

      let product;
      try{
       product = await Product.findOne({modelNo:query.modelNo,productType:'parent'}).select('title').select('modelNo').select('bulletDescription').select('media').select('rating');
       if(!product){
         return res.status(404).json({status:404});
       } 
      }catch(error){
        return next(error)
      }

      let threeStarCount;
      let threeStarProduct;
      try{
       threeStarProduct = await Product.findOne({modelNo:query.modelNo,productType:'variant',rating:3}).select('isSale').select('salePrice').select('regPrice').select('rating')
       threeStarCount = await Product.countDocuments({modelNo:query.modelNo,productType:'variant',rating:3})    
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
      let fourStarCount;
      let fourStarProduct;
      try{
       fourStarProduct = await Product.findOne({modelNo:query.modelNo,productType:'variant',rating:4}).select('isSale').select('salePrice').select('regPrice').select('rating')
       fourStarCount = await Product.countDocuments({modelNo:query.modelNo,productType:'variant',rating:4})
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
      let fiveStarCount;
      let fiveStarProduct;
      try{
       fiveStarProduct = await Product.findOne({modelNo:query.modelNo,productType:'variant',rating:5}).select('isSale').select('salePrice').select('regPrice').select('rating')
       fiveStarCount = await Product.countDocuments({modelNo:query.modelNo,productType:'variant',rating:5})    
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

      return res.status(200).json({status:200,product:product,threeStarProduct,fourStarProduct,fiveStarProduct,threeStarCount,fourStarCount,fiveStarCount});
    
    },
    async GetApplianceBuyingOptions(req,res,next){
      const data = req.body;
      
      if(!data.modelNo){
        return res.status(404).json({status:404});
      }

      let query = {}
      if(data.filter !== 'all'){
       query.rating = data.filter;
       query.productType = 'variant';
       query.modelNo = data.modelNo
      }else{
        query.productType = 'variant';
        query.modelNo = data.modelNo
      }
      
      let page = Number(req.body.page)
      let limit = Number(req.body.limit)
      let skip = (page - 1) * limit
      
      try{
       const products = await Product.find(query).skip(skip).limit(limit).select('slug').select('modelNo').select('itemId').select('rating').select('isSale').select('salePrice').select('regPrice').select('media') 
       const productCount = await Product.countDocuments(query)
       return res.status(200).json({status:200,products:products,productCount:productCount});
      }catch(error){
        return next(error)
      }
    
    },
    async GetApplianceBySectionType(req,res,next){
      
      let query = {};
      let sort = {};
      const data = req.body;
      Object.keys(data).forEach(prop => {
       switch(prop){
        case 'query':
         query.title = { $regex: data[prop], $options: "i" };
        break;
        case 'rating':
         query.rating = parseInt(data[prop]);
        break;
        case 'features':
         query.feature = [data[prop]];
        break;
        case 'types':
         query.type = data[prop];
        break;
        case 'finishes-and-colors':
         query.color = data[prop];
        break;
        case 'brands':
         query.brand = data[prop];
        break;
        case 'brand':
         query.brand = data[prop];
        break;
        case 'fuel-types':
         query.fuelType = data[prop];
        break;
        case 'isSale':
         query.isSale = data[prop];
        break;
        case 'category':
         query.category = data[prop];
        break;
        case 'brand':
         query.brand = data[prop];
        break;
        case 'sort':
         sort.createdAt = data[prop];
        break;
      }
      });
      console.log(query)
      let page = Number(req.body.page)
      let limit = Number(req.body.limit)
      let skip = (page - 1) * limit

      let products;
      let totalProducts;
      try{
        if(req.body.isSale){
          products = await Product.find({...query,$and: [{ salePrice: { $lte: req.body.salePrice.max } },{ salePrice: { $gte: req.body.salePrice.min } }]}).sort(sort).skip(skip).limit(limit);
          totalProducts = await Product.countDocuments({...query,$and: [{ salePrice: { $lte: req.body.salePrice.max } },{ salePrice: { $gte: req.body.salePrice.min } }]})
        }else if(!req.body.isSale){
          products = await Product.find({...query,$and: [{ regPrice: { $lte: req.body.regPrice.max } },{ regPrice: { $gte: req.body.regPrice.min } }]}).sort(sort).skip(skip).limit(limit);
          totalProducts = await Product.countDocuments({...query,$and: [{ regPrice: { $lte: req.body.regPrice.max } },{ regPrice: { $gte: req.body.regPrice.min } }]})
        }else{
          products = await Product.find(query).sort(sort).skip(skip).limit(limit);
          totalProducts = await Product.countDocuments(query)
        }
      }catch(error){
        return next(error)
      }      
      
      return res.status(200).json({status:200,products:products,totalProducts:totalProducts});
           
    },

    async GetSliderAppliances(req,res,next){
      let data = req.body;
      
      
      let query = {}
      Object.keys(data).forEach(prop => {
       switch(prop){
        case 'rating':
         query.rating = parseInt(data[prop])
         break;
        case 'category':
         query.category = data[prop]
         break;
        case 'isSale':
         query.isSale = Boolean(data[prop])
         break;
       }
      })
     

      try{
       const products = await Product.find(query).sort({ createdAt: parseInt(req.query.sort) }).select('slug').select('title').select('media').select('isSale').select('salePrice').select('regPrice').select('rating');
       return res.status(200).json({status:200,products:products});
      }catch(error){
        return next(error)
      }      
    },
    async GetApplianceByFilter(req,res,next){
      try{
      
       const products = await Product.find(req.body);
       
      
       return res.status(200).json({status:200,products:products});
      }catch(error){
        return next(error)
      }      
    },

    async GetAppliancesFilters(req,res,next){
      let categoryFilters;
      let ratingFilters;
      let onSale;
      let regular;
      try {
      categoryFilters = await Category.aggregate([
          {
            $lookup: {
              from: 'products', // The name of the "products" collection (automatically pluralized)
              localField: 'slug',
              foreignField: 'category',
              as: 'products'
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              productCount: { $size: '$products' }
            }
          }
        ]);
  
          ratingFilters = await Product.aggregate([
            {
              $match: {
                rating: { $in: [3, 4, 5] } // Match products with rating 3, 4, or 5
              }
            },
            {
              $group: {
                _id: '$rating', // Group by the 'rating' field
                count: { $sum: 1 } // Count the number of products in each group
              }
            }
          ]);


          onSale = await Product.aggregate([
            {
              $match: {
                salePrice: { $ne: null } // Match products with a non-empty salePrice
              }
            },
            {
              $group: {
                _id:'$salePrice',
                count: { $sum: 1 } // Count the number of products in each group
              }
            }
          ]);
          
          regular = await Product.aggregate([
            {
              $match: {
                salePrice: null  // Match products with a non-empty salePrice
              }
            },
            {
              $group: {
                _id: '$regPrice',
                count: { $sum: 1 } // Count the number of products in each group
              }
            }
          ]);

       return res.status(200).json({status:200,categoryFilters:categoryFilters,ratingFilters:ratingFilters,regularFilter:regular,saleFilter:onSale});

      }catch(error){
        return next(error)
      }

    },

    async SearchAppliance(req,res,next){
      return res.status(200).json({status:200,appliances:req.body.query});
    },

}

module.exports = applianceController
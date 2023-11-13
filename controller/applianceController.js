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
      try{
        const product = await Product.findOne({slug:slug});
        return res.status(200).json({status:200,product:product});
      }catch(error){
        return next(error)
      }      
    },
    async GetApplianceBySectionType(req,res,next){
      // console.log(req.body)
      let query = {};
      let sort = {};
      // console.log(prop + ': ' + data[prop]);
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

      let products;
      try{
        if(req.body.salePrice){
          products = await Product.find({...query,$and: [{ salePrice: { $lte: req?.body?.salePrice?.max } },{ salePrice: { $gte: req?.body?.salePrice?.min } }]}).sort(sort);
        }else if(req.body.regPrice){
          products = await Product.find({...query,$and: [{ regPrice: { $lte: req?.body?.regPrice?.max } },{ regPrice: { $gte: req?.body?.regPrice?.min } }]}).sort(sort);
        }else{
          products = await Product.find(query).sort(sort);
        }
      }catch(error){
        return next(error)
      }      

      return res.status(200).json({status:200,products:products});
           
    },

    async GetApplianceByFilter(req,res,next){
      try{
      //  console.log(req.body)
       const products = await Product.find(req.body);
       console.log(products)
      //  console.log(products)
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
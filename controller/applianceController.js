const Category = require("../models/category");
const Product = require("../models/product");
const categorySection = require("../models/categorySection");
const sectionItem = require("../models/sectionItem");

const applianceController = {
    async GetAppliances(req,res,next){
      try{
        const categories = await Category.find({}).limit(5);
        return res.status(200).json({status:200,categories:categories});
      }catch(error){
        return next(error)
      }      
    },
    async GetApplianceSections(req,res,next){
      const {categorySlug} = req.body;
      const category = await Category.findOne({slug:categorySlug})
      
      categorySection.find({ categoryId: category._id })
      .populate('sectionItemsId')
      .exec()
      .then(categorySections => {
        // categorySections will contain an array of CategorySection documents
      
        return res.status(200).json({status:200,categorySections:categorySections,categoryDescription:category.description,categoryTitle:category.title});
      })
      .catch(err => {
        return res.status(500).json({status:500,msg:"Internal Server Error!"});
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
      const {category,type,value} = req.body;
      const query = {category}
      try{

        switch(type){
          case 'cosmatic-rating':
           query.rating = value;
           break;
          case 'types':
            query.type = value;
            break
          case 'features':
            query.feature = value;
            break;
          case 'brands':
            query.brand = value;
            break
          case 'colors':
            query.color = value;
            break
          case 'fuel-type':
            query.fuelType = value;
            break
        }

        
        const products = await Product.find(query);
        return res.status(200).json({status:200,products:products});
        
      }catch(error){
        return next(error)
      }      
    },
    async GetAppliancesFilters(req,res,next){
      let categoryFilters;
      let ratingFilters;
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
       return res.status(200).json({status:200,categoryFilters:categoryFilters,ratingFilters:ratingFilters});

      }catch(error){
        return next(error)
      }

    },
}

module.exports = applianceController
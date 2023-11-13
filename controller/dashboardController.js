const Product = require('../models/product')
const Category = require('../models/category')
const Order = require('../models/order')
const Refund = require('../models/refund')

const dashboardController = {
 async GetDashboardData(req,res,next){
  try{         
    const productCount = await Product.countDocuments()
    const orderCount = await Order.countDocuments()
    const categoryCount = await Category.countDocuments()
    const refundCount = await Refund.countDocuments()

    return res.status(200).json({status:200,dashboard:{productCount:productCount,orderCount:orderCount,categoryCount:categoryCount,refundCount:refundCount}})

  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    
 }
}

module.exports = dashboardController
const User = require('../models/user')
const Admin = require('../models/admin')
const Order = require('../models/order')
const OrderAddress = require('../models/orderAddress')
const Joi = require("joi");

const customerController = {
  async getAllCustomers(req, res, next) {
  
    const {userType} = req.body;

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    
    let skip = (page - 1) * limit;

    (async () => {
      try {
        let customers = [];
        let totalCount = 0;
        if(userType === 'user'){
          customers = await User.find({}).select('firstName lastName createdAt email').skip(skip).limit(limit);
          totalCount = await User.countDocuments({});
        }else{
          customers = await Admin.find({}).select('firstName lastName createdAt email').skip(skip).limit(limit);
          totalCount = await Admin.countDocuments({});
        }
    
        const customerIds = customers.map(customer => customer._id);
        const results = await Order.aggregate([
          {
            $match: {
              customerId: { $in: customerIds }
            }
          },
          {
            $group: {
              _id: '$customerId',
              orderCount: { $sum: 1 },
              totalAmount: { $sum: '$grandTotal' },
              lastOrder: { $last: '$createdAt' }
            }
          }
        ]);
    
        const customersWithOrders = customers.map(customer => {
          const orderCountObj = results.find(result => result._id.equals(customer._id));
          return {
            customer,
            orderCount: orderCountObj ? orderCountObj.orderCount : 0,
            totalAmount: orderCountObj ? orderCountObj.totalAmount : 0,
            lastOrder: orderCountObj ? orderCountObj.lastOrder : null
          };
        });
    
        return res.status(200).json({ customers: customersWithOrders,totalCount:totalCount });
      } catch (error) {
        return res.status(500).json({ message:'Internal Server Error!' });
      }
    })();
    

  },

  async getCustomerShippingAddress(req,res,next) {
    try{
     const shippingAddress = await OrderAddress.findOne({userId:req.body.userId,type:'shipping'}).sort({ createdAt: -1 })
     return res.status(200).json({ shippingAddress: shippingAddress });
    } catch (error) {
      return res.status(500).json({ message:'Internal Server Error!' });
    }
  },

  async getCustomerBillingAddress(req,res,next) {
    try{
     const billingAddress = await OrderAddress.findOne({userId:req.body.userId,type:'billing'}).sort({ createdAt: -1 })
     return res.status(200).json({ billingAddress: billingAddress });
    } catch (error) {
      return res.status(500).json({ message:'Internal Server Error!' });
    }
  },
  
  
  async searchCustomerWithEmail(req,res,next) {
    // 1. validate user input
    const userLoginSchema = Joi.object({
      email: Joi.string().required(),
    });

    const { error } = userLoginSchema.validate(req.body);
    
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    }
    
    const { email } = req.body;
    try{
     const customers = await User.find({email:{$regex:email}}).select('email')
     return res.status(200).json({ customers: customers });
    } catch (error) {
      return res.status(500).json({ message:'Internal Server Error!' });
    }
  }

}

module.exports = customerController
const User = require('../models/user')
const Admin = require('../models/admin')
const Order = require('../models/order')
const OrderAddress = require('../models/orderAddress')

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

  // async getCustomerDetails(req,res,next) {
  //   const customer = 
  // }

}

module.exports = customerController
const User = require('../models/user')
const Admin = require('../models/admin')
const Order = require('../models/order')

const customerController = {
  async getAllCustomers(req, res, next) {
    let userType = req.body.userType

    try{
     // Use the aggregation framework to get the count of orders for each customer
     (async () => {
      try {
        const results = await Order.aggregate([
          {
            $group: {
              _id: '$customerId',
              orderCount: { $sum: 1 },
              totalAmount: { $sum: '$grandTotal' },
              lastOrder: { $last: '$$ROOT' }
            }
          }
        ]);
        // console.log(results)
        let customers;
        const customerIds = results.map(result => result._id);
        
        if(userType === 'user'){
          customers = await User.find({ _id: { $in: customerIds } }).select('firstName lastName createdAt email');
        }else{
          customers = await Admin.find({ _id: { $in: customerIds } }).select('firstName lastName createdAt email');
        }
        
    
        const customersWithOrderCount = customers.map(customer => {
          const orderCountObj = results.find(result => result._id.equals(customer._id));
          return {
            customer,
            orderCount: orderCountObj ? orderCountObj?.orderCount : 0,
            totalAmount: orderCountObj ? orderCountObj?.totalAmount : 0,
            lastOrder: orderCountObj ? orderCountObj?.lastOrder?.createdAt : null
          };
        });
        return res.status(200).json({customers:customersWithOrderCount})
      } catch (error) {
        console.error('Error:', error);
      }
    })();
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },

}

module.exports = customerController
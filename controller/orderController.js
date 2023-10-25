const Joi = require("joi");
const OrderAddress = require('../models/orderAddress')
const Cart = require('../models/cart')
const Admin = require('../models/admin')
const User = require('../models/user')
const NewsEmail = require('../models/newsEmail')
const Order = require('../models/order')
const bcrypt = require("bcryptjs");
const RandExp = require('randexp');
const SendMail = require('../services/NeuMailer')

const orderController = {

 async processOrder(req, res, next) {
  // 1. validate user input
   const orderSchema = Joi.object({
     userId: Joi.string().allow('').allow(null),
     cartId: Joi.string().required(),
     isAdmin: Joi.boolean().required(),
     isAuth: Joi.boolean().required(),
     orderType: Joi.string().required(),
     shippingAddress:Joi.object().required(),
     billingInfo:Joi.object().required(),
     paymentInfo:Joi.object().required(),
     newsEmail:Joi.array().required(),
   });
   const { error } = orderSchema.validate(req.body);
  
   // 2. if error in validation -> return error via middleware
   if (error) {
     return next(error)
   };

   const {userId,cartId,isAdmin,isAuth,orderType,shippingAddress,billingInfo,paymentInfo,newsEmail} = req.body;

  //  1. Check is customer or admin logged in
  let USER_TYPE = 'User';
  if(isAdmin){
    USER_TYPE = 'Admin'
  }
  
  //  2. if logged in then create a variabel newUser to store userId 
  //   else create a new user with shipping address email and set random password. then store this new user id in newUser varibale.
  
  let USER = userId;
  if(isAuth){
    if(USER_TYPE === 'Admin'){
      try{
       const getAdmin = await Admin.findOne({_id:userId});
       USER = getAdmin._id;
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
    }else{
      try{
       const getUser = await User.findOne({_id:userId});
       USER = getUser._id;
      }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})} 
     }
  }
  let oldUser;
  let newUser;
  let newUserPass;
  if(!isAuth){
   try{
    const getUser = await User.findOne({email:shippingAddress.email});
    oldUser = getUser; 
  }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})} 
   if(oldUser){ 
     USER = oldUser._id;
   }else{
      try{
       const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/;
       const securePassword = new RandExp(regex).gen();
       const hashedPassword = await bcrypt.hash(securePassword, 10);
       newUserPass = hashedPassword;
       const createUser = new User({email:shippingAddress.email,password:hashedPassword});
       const getUsr = await createUser.save();
       USER = getUsr._id
       newUser = getUsr;
      }catch(error){console.log(error)}
   }
  }

  // Send New User Credential in mail
  // if(newUser){
  //   SendMail.NodeMailer(`Your accont password ${newUserPass} `,'Account Credentials',`${newUser.email}`)
  // }

  // // 3. now find the cart by cartId and store in variabel cart.

  const CART = await Cart.findOne({_id:cartId})
  if(!CART){
    return res.send(500).json({status:500,message:'Cart Not Found!'})
  }

  // 4. get order products from cart (orderType = 'delivery'?deliveryOrders:pickupOrders)
  let orderProducts;
  if(orderType === 'delivery'){
    orderProducts = CART.deliveryOrders;
  }else{
    orderProducts = CART.pickupOrders;
  }

  // 5. check entire shippingInfo object against orderAddress with type shipping and 
  //  if found do nothing else create new address with the userId.
  const {email,firstName,lastName,address,appartment,country,state,city,postalCode,phone} = shippingAddress;
  let shippingAddressId;
  let isShippingAddress;
  try{
    isShippingAddress = await OrderAddress.findOne({type:'shipping',email: email,firstName:firstName,lastName: lastName,address: address,appartment: appartment,country: country,state: state,city: city,postalCode: postalCode,phone: phone});
  }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
  try{
   if(!isShippingAddress){
    const newShippingAddress = new OrderAddress({userId:USER,type:'shipping',email: email,firstName:firstName,lastName: lastName,address: address,appartment: appartment,country: country,state: state,city: city,postalCode: postalCode,phone: phone});
    const getShippingAddress = await newShippingAddress.save();
    shippingAddressId = getShippingAddress._id;
   }else{
    shippingAddressId = isShippingAddress._id;
   }
  }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
   
  // 6. check entire billingInfo object against orderAddress with type billing and 
  //  if found do nothing else create new address with the userId.
  
  let billingAddressId;
  let isBillingAddress;
  try{
   isBillingAddress = await OrderAddress.findOne({type:'billing',email: billingInfo.email,firstName:billingInfo.firstName,lastName: billingInfo.lastName,address: billingInfo.address,appartment: billingInfo.appartment,country: billingInfo.country,state: billingInfo.state,city: billingInfo.city,postalCode: billingInfo.postalCode,phone: billingInfo.phone});
   if(!isBillingAddress){
    const newBillingAddress = new OrderAddress({userId:USER,type:'billing',email: billingInfo.email,firstName: billingInfo.firstName,lastName: billingInfo.lastName,address: billingInfo.address,appartment: billingInfo.appartment,country: billingInfo.country,state: billingInfo.state,city: billingInfo.city,postalCode: billingInfo.postalCode,phone: billingInfo.phone});
    const getBillingAddress = await newBillingAddress.save();
    billingAddressId = getBillingAddress._id;
   }else{
    billingAddressId = isBillingAddress._id
   }
  }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}

  // 7. get orders finance (total,tax,grandTotal)
  const total = CART.total;
  const tax = CART.tax;
  const grandTotal = CART.grandTotal;
  const cartCount = CART.cartCount;
  let shipping;
  if(orderType === 'delivery'){
    shipping = CART.deliveryInfo.shipping;
  }else{
    shipping = CART.pickupInfo.location;
  }

  async function bulkCreateNewsEmail(newsEmail) {
    try {
        const promises = newsEmail.map(async (item) => {
            const newNewsEmail = new NewsEmail({ email: item });
            await newNewsEmail.save();
        });

        await Promise.all(promises);
        console.log("Bulk creation successful.");
    } catch (error) {
        console.error("Already Exist!");
    }
  }

  // if newsEmail array > 0 add all these emails in newsEmail model.
  if(newsEmail.length > 0){
   await bulkCreateNewsEmail(newsEmail)
  }

  async function createOrderNumber() {
    try {
        const lastOrder = await Order.findOne().sort({ createdAt: -1 }); // Find the last order
        let lastOrderNumber = lastOrder ? parseInt(lastOrder.orderNo.split('-')[1]) : 0; // Extract the last order number
        const newOrderNumber = `NEU-${lastOrderNumber + 1}`; // Generate the new order number
        return newOrderNumber;
    } catch (error) {
        console.error('Error in creating order number:', error);
    }
}

  // 8. create new order and save it in database.
  const orderNumber = await createOrderNumber();
  try{
  const createOrder = new Order({
    orderNo:orderNumber,
    customerId: USER,
    userType: USER_TYPE,
    orders: orderProducts,
    shippingAddress: shippingAddressId,
    billingAddress:  billingAddressId,
    shipping: shipping.toString(),
    cartCount: cartCount,
    paymentInfo:paymentInfo,
    tax: tax,
    total: total,
    grandTotal: grandTotal,
    orderType: orderType,
   }
  );
  
  const newOrder = await createOrder.save();
  return res.status(200).json({status: 200,msg:'Order Placed Successfully!'});
 }catch(error){
   return res.status(500).json({status: 500,message:'Internal Server Error!'});
  }

  // 9. send order completed email to customer with template.

  // 10. send temprorary password with email to customer so he can login to view order details.


  },

  async createOrderIntent(req, res, next) {
    //  
  },

  async getOrders(req, res, next) {
    try{
     const orders = await Order.find({})
     return res.status(200).json({status: 200,orders:orders});
    }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
  },
  
  async getOrderById(req, res, next) {
    // try{
     const order = await Order.findOne({orderNo:req.body.orderNo}).populate('shippingAddress').populate('billingAddress');
     return res.status(200).json({status: 200,order:order});
    // }catch(error){return res.send(500).json({status:500,message:'Internal Server Error!'})}
  },

}

module.exports = orderController
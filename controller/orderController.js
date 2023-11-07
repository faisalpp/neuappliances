const {STRIPE_PUBLISHABLE_KEY,STRIPE_PRIVATE_KEY,WEBSITE_HOST_ADDRESS,NODE_ENV,WEBSITE_NAME} = require('../config/index')
const Joi = require("joi");
const OrderAddress = require('../models/orderAddress')
const Cart = require('../models/cart')
const Admin = require('../models/admin')
const User = require('../models/user')
const NewsEmail = require('../models/newsEmail')
const Order = require('../models/order')
const Product = require('../models/product')
const bcrypt = require("bcryptjs");
const RandExp = require('randexp');
const SendMail = require('../services/NeuMailer')
const ManageOrder = require('../services/ManageOrder')
const EmailTemplates = require('../services/EmailTemplates')
const Stripe = require('stripe')(STRIPE_PRIVATE_KEY)
const crypto = require('crypto')

const orderController = {

 async processOrder(req, res, next) {
  // console.log(req.body)
  // 1. validate user input
   const orderSchema = Joi.object({
     userId: Joi.string().allow('').allow(null),
     cartId: Joi.string().required(),
     isAdmin: Joi.boolean().required(),
     isAuth: Joi.boolean().required(),
     orderType: Joi.string().required(),
     shippingAddress:Joi.object().required(),
     billingInfo:Joi.object().required(),
     newsEmail:Joi.array().required(),
   });
   const { error } = orderSchema.validate(req.body);
  
   // 2. if error in validation -> return error via middleware
   if (error) {
     return next(error)
   };

   const {userId,cartId,isAdmin,isAuth,orderType,shippingAddress,billingInfo,newsEmail} = req.body;


  // // 3. now find the cart by cartId and store in variabel cart.

  const CART = await Cart.findOne({_id:cartId})
  if(!CART){
    return res.status(500).json({status:500,message:'Cart Not Found!'})
  }

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
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    }else{
      try{
       const getUser = await User.findOne({_id:userId});
       USER = getUser._id;
      }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})} 
     }
  }

  let oldUser;
  let newUser;
  if(!isAuth){
   try{
    const getUser = await User.findOne({email:shippingAddress.email});
    oldUser = getUser; 
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})} 
   if(oldUser){ 
     USER = oldUser._id;
   }else{
      try{
       const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/;
       const securePassword = new RandExp(regex).gen();
       const newUserPass = await bcrypt.hash(securePassword, 10);
       const createUser = new User({firstName:shippingAddress.firstName,lastName:shippingAddress.lastName,email:shippingAddress.email,password:newUserPass});
       const getUsr = await createUser.save();
       USER = getUsr._id
       newUser = getUsr;
       if(newUser){
        const loginUrl = NODE_ENV === 'production' ?  `${WEBSITE_HOST_ADDRESS}/login` : 'http://localhost:5173/login'
        const body = await EmailTemplates.NewAccountTemplate(`${newUser.firstName} ${newUser.lastName}`,newUser.email,loginUrl,securePassword)
        SendMail.NodeMailer(body,`Your New Account Details for ${WEBSITE_NAME}`,newUser.email)
       }
      }catch(error){console.log(error)}
   }
  }


  // Send New User Credential in mail
  // console.log(newUser)
  // if(newUser){

  // }

  

  // 4. get order products from cart (orderType = 'delivery'?deliveryOrders:pickupOrders)
  let orderProducts;
  if(orderType === 'delivery'){
    orderProducts = CART.deliveryOrders;
  }else{
    orderProducts = CART.pickupOrders;
  }

  // 5. check entire shippingInfo object against orderAddress with type shipping and 
  //  if found do nothing else create new address with the userId.
  const {email,firstName,lastName,address,appartment,country,state,city,postalCode,phone,saveAddress} = shippingAddress;
  let shippingAddressId;
  let isShippingAddress;
  try{
    isShippingAddress = await OrderAddress.findOne({type:'shipping',email: email,firstName:firstName,lastName: lastName,address: address,appartment: appartment,country: country,state: state,city: city,postalCode: postalCode,phone: phone});
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  try{
   if(!isShippingAddress){
    if(saveAddress){
      const newShippingAddress = new OrderAddress({userId:USER,type:'shipping',email: email,firstName:firstName,lastName: lastName,address: address,appartment: appartment,country: country,state: state,city: city,postalCode: postalCode,phone: phone});
      const getShippingAddress = await newShippingAddress.save();
      shippingAddressId = getShippingAddress._id;
    }else{
      const newShippingAddress = new OrderAddress({type:'shipping',email: email,firstName:firstName,lastName: lastName,address: address,appartment: appartment,country: country,state: state,city: city,postalCode: postalCode,phone: phone});
      const getShippingAddress = await newShippingAddress.save();
      shippingAddressId = getShippingAddress._id;
    }
   }else{
    shippingAddressId = isShippingAddress._id;
   }
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
   
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
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

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
        // console.log("Bulk creation successful.");
    } catch (error) {
        // console.error("Already Exist!");
    }
  }

  // if newsEmail array > 0 add all these emails in newsEmail model.
  if(newsEmail.length > 0){
   await bulkCreateNewsEmail(newsEmail)
  }


//   8. create new order and save it in database.
  const date = new Date();
  let orderNumber = `${crypto.randomBytes(2).toString('hex')}-D${date.getDay()}M${date.getMonth()}Y${date.getFullYear()}`;
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
     tax: tax,
     total: total,
     grandTotal: grandTotal,
     orderType: orderType,
    }
   );
  
   newOrder = await createOrder.save();
   return res.status(200).json({status: 200,orderNo:orderNumber});
   }catch(error){
    return res.status(500).json({status: 500,message:'Internal Server Error!'});
   }

  },

  async confirmOrder(req, res, next) {
    let ip = req?.ip;
      // 1. validate user input
    const orderSchema = Joi.object({
     orderNo: Joi.string().required(),
     intent: Joi.object().required(),
     cartId: Joi.string().required(),
   });
   const { error } = orderSchema.validate(req.body);
  
   // 2. if error in validation -> return error via middleware
   if (error) {
     return next(error)
   };

   let HOST = NODE_ENV === "production" ?  WEBSITE_HOST_ADDRESS : 'http://localhost:5173';
 
   const {orderNo,intent,cartId} = req.body;
    let updateOrder; 
    try{
     updateOrder = await Order.findOneAndUpdate({orderNo:orderNo},{paymentInfo:intent,orderStatus:'processing',customerIp:ip},{new:true}).populate('shippingAddress').populate('billingAddress');
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    
    try{
     await Cart.findOneAndDelete(cartId)
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

    if(updateOrder){
      let ShippingAddress = `${updateOrder.shippingAddress.address} ${updateOrder.shippingAddress.city}, ${updateOrder.shippingAddress.state}, ${updateOrder.shippingAddress.postalCode} ${updateOrder.shippingAddress.country}`
      let BillingAddress = `${updateOrder.billingAddress.address}, ${updateOrder.billingAddress.city}, ${updateOrder.billingAddress.state}, ${updateOrder.billingAddress.postalCode} ${updateOrder.billingAddress.country}`
      const ORDERS_TEMPLATE = EmailTemplates.NewOrderTemplate(updateOrder.orders,updateOrder.orderNo,HOST,ShippingAddress,BillingAddress,updateOrder.cartCount,updateOrder.grandTotal,updateOrder.createdAt)
       if(ORDERS_TEMPLATE){
       SendMail.NodeMailer(ORDERS_TEMPLATE,`Order Confirmation Email->${WEBSITE_NAME}`,updateOrder.shippingAddress.email)
       return res.status(200).json({status:200,msg:'Order Placed Successfully!'})
      }
    }
  },

  async getStripePublishableKey(req, res, next) {
    const stripePublishKey = STRIPE_PUBLISHABLE_KEY;
    // console.log(stripePublishKey)
    return res.status(200).json({stripePublishKey:stripePublishKey})
  },

  async createCheckoutSession(req, res, next) {
    const {cartId,orderType,paymentMod,customerEmail} = req.body;
    
    let orders = [];
    let shipping = {name:'',fee:0};
    const CART = await Cart.findOne({_id:cartId})
    if(orderType === 'delivery'){
      orders = CART.deliveryOrders
      shipping = {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: CART.deliveryInfo.shipping * 100,
            currency: 'usd',
          },
          display_name: 'Home Delivery',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 2,
            },
            maximum: {
              unit: 'business_day',
              value: 3,
            },
          },
        },
      } 
    }else{
      orders = CART.pickupOrders
      shipping = {shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'usd',
        },
        display_name: shipping.name,
      }, 
    }
  }
    let lineItems = [];
    if(orders.length > 0){
      orders.forEach((order)=>{
      const existingProductIndex = lineItems.findIndex(p => p.product.pid === order.pid);
      // If product exists, increment its quantity
      if (existingProductIndex !== -1) {
        lineItems[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it to the array
      lineItems.push({product:{pid:order.pid,name:order.title,price:order.salePrice?order.salePrice:order.regPrice}, quantity: 1 });
    }
  })
 }

       // create tax id 
       const taxRate = await Stripe.taxRates.create({ // Here
        display_name: 'GST',
        percentage: 8.25,
        inclusive: false
      });

    // console.log(lineItems)

    const line_items = lineItems.map((order)=>({
      price_data: {
        currency: "usd",
        product_data:{
          name:order.product.name,
        },
        unit_amount:order.product.price * 100
      },
      quantity:order.quantity,
      tax_rates:[taxRate.id]
    }));

    // console.log(line_items)


    if(line_items.length > 0){   

      // const WEBSITE_HOST = WEBSITE_HOST_ADDRESS
      const WEBSITE_HOST = "http://localhost:5173"
      const session = await Stripe.checkout.sessions.create({
        payment_method_types:[paymentMod],
        line_items:line_items,
        mode: 'payment',
        customer_email:customerEmail,
        success_url: `${WEBSITE_HOST}/mycart/order-success`,
        cancel_url: `${WEBSITE_HOST}/mycart/order-failed`,
        shipping_options:[shipping],
      });
      return res.status(200).json({id:session.id})
    } 

  },

  async createPaymentIntent(req, res, next) {
    const {price,mode,currency,description} = req.body;
      // try{
        const paymentIntent = await Stripe.paymentIntents.create({
          amount: price,
          currency: currency,
          payment_method_types: mode,
          description: description,
        });
        if(paymentIntent){
          return res.status(200).json({payIntent:paymentIntent})
        }
      // }catch(err){
      //   return res.status(500).json({status:500,message:'Internal Server Error!'})
      // }
  },

  async getOrders(req, res, next) {
    
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    
    let skip = (page - 1) * limit;
    
    try{
     let orders;
     let totalCount;
     if(req.body.orderType === 'all-orders'){
       orders = await Order.find().skip(skip).limit(limit);
       totalCount = await Order.countDocuments({});
     }else if (req.body.orderType === 'archived'){
       orders = await Order.find({isArchived:true}).skip(skip).limit(limit);
       totalCount = await Order.countDocuments({isArchived:true});
     }else{
       orders = await Order.find({orderType:req.body.orderType}).skip(skip).limit(limit);
       totalCount = await Order.countDocuments({orderType:req.body.orderType});
      }
      return res.status(200).json({status: 200,orders:orders,totalCount:totalCount});
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },

  async searchOrder(req, res, next) {
     console.log(req.body)
     // 1. validate user input
     const orderSchema = Joi.object({
      orderNo: Joi.string().required(),
    });
    const { error } = orderSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    };

    try{
     const orders = await Order.find({ orderNo: { $regex: req.body.orderNo, $options: 'i' } })
    //  console.log(orders)
     const totalCount = orders.length;
     return res.status(200).json({status: 200,orders:orders,totalCount:totalCount});
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },
  
  async getOrderById(req, res, next) {
    try{
     const order = await Order.findOne({orderNo:req.body.orderNo}).populate('shippingAddress').populate('billingAddress').populate('customerId');
     return res.status(200).json({status: 200,order:order});
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },
  async archiveOrderById(req, res, next) {
    const orderSchema = Joi.object({
     orderId: Joi.string().required(),
    });
    const { error } = orderSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    };
 
    const {orderId} = req.body;

    try{
     await Order.findOneAndUpdate({_id:orderId},{isArchived:true})
     return res.status(200).json({status: 200,msg:'Order Archived Successfully!'});
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },
  async unArchiveOrderById(req, res, next) {
    const orderSchema = Joi.object({
     orderId: Joi.string().required(),
    });
    const { error } = orderSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    };
 
    const {orderId} = req.body;

    try{
     await Order.findOneAndUpdate({_id:orderId},{isArchived:false})
     return res.status(200).json({status: 200,msg:'Order UnArchived Successfully!'});
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },
  async updateOrderStatus(req, res, next) {
    const orderSchema = Joi.object({
     orderId: Joi.string().required(),
     type: Joi.string().required(),
     status: Joi.string().required(),
    });
    const { error } = orderSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    };
 
    const {type,status,orderId} = req.body;

    let query = {}
    
    switch(type){
      case 'order':
       query.orderStatus = status
       break;
      case 'payment':
        query.paymentStatus = status
        break; 
    }

    try{
     const updatedOrder = await Order.findOneAndUpdate({_id:orderId},query,{new:true}).populate('shippingAddress').populate('billingAddress').populate('customerId')
     return res.status(200).json({status: 200,order:updatedOrder,msg:'Order Updated Successfully!'});
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },

  async updateOrderAddresses(req, res, next) {
    const orderSchema = Joi.object({
     id: Joi.string().required(),
     email:Joi.string().required(),
     firstName:Joi.string().required(),
     lastName:Joi.string().required(),
     address:Joi.string().required(),
     appartment:Joi.string().allow('').allow(null),
     city:Joi.string().required(),
     country:Joi.string().required(),
     state:Joi.string().required(),
     postalCode:Joi.string().required(),
     phone:Joi.string().required(),
    });
    const { error } = orderSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    };
 
    const {id,email,firstName,lastName,address,appartment,city,country,state,postalCode,phone} = req.body;

    try{
     const updatedAddress = await OrderAddress.findOneAndUpdate({_id:id},{email,firstName,lastName,address,appartment,city,country,state,postalCode,phone},{new:true})
     return res.status(200).json({status: 200,address:updatedAddress,msg:'Order Updated Successfully!'});
    }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
  },

  async searchOrderByTitleOrModel(req, res, next) {
    const orderSchema = Joi.object({
     query: Joi.string().required(),
     type: Joi.string().required(),
    });
    const { error } = orderSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    };
 
    const {type,query} = req.body;

    if(type === 'title'){
     try{
     const result2 = await Product.find({ title: { $regex: query, $options: 'i' } }).select('media').select('title').select('salePrice').select('regPrice').select('stock').select('modelNo').select('productType').select('rating')
      return res.status(200).json({status: 200,result:result2});
     }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    }else{
     try{
      const result = await Product.find({ modelNo: { $regex: query, $options: 'i' } }).select('media').select('title').select('salePrice').select('regPrice').select('stock').select('modelNo').select('productType').select('rating')
      return res.status(200).json({status: 200,result:result});
     }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}
    }
  },

  async creatAdminOrder(req, res, next) {
    console.log(req.body)
    const orderSchema = Joi.object({
     orderDate: Joi.string().required(),
     orderStatus: Joi.string().required(),
     orderType: Joi.string().required(),
     transactionId: Joi.string().required(),
     paymentMethod: Joi.string().required(),
     shippingAddress: Joi.object().required(),
     billingAddress: Joi.object().required(),
     tax: Joi.object().required(),
     subTotal: Joi.number().required(),
     shipping: Joi.number().required(),
     coupen: Joi.number().required(),
     grandTotal: Joi.object().required(),
     selectedProducts: Joi.string().required(),
     selectedUser: Joi.object().required(),
    });
    const { error } = orderSchema.validate(req.body);
   
    // 2. if error in validation -> return error via middleware
    if (error) {
      return next(error)
    };
 
    const {orderDate,orderStatus,orderType,transactionId,paymentMethod,shippingAddress,billingAddress,tax,subTotal,shipping,coupen,grandTotal,selectedProducts,selectedUser} = req.body;
    console.log(orderDate,orderStatus,orderType,transactionId,paymentMethod,shippingAddress,billingAddress,tax,subTotal,shipping,coupen,grandTotal,selectedProducts,selectedUser)
    
    let orderNumber;
    if(selectedUser.email === 'Guest'){
      orderNumber = `${crypto.randomBytes(2).toString('hex')}-AG-D${date.getDay()}M${date.getMonth()}Y${date.getFullYear()}`;
    }else{
      orderNumber = `${crypto.randomBytes(2).toString('hex')}-AU-D${date.getDay()}M${date.getMonth()}Y${date.getFullYear()}`;
    }

    let cartCount=0;
    let ip = req?.ip;
    const PRODUCTS = JSON.parse(selectedProducts)

    for(let i=0;i<PRODUCTS.length;i++){
      cartCount += PRODUCTS[i].count;
    }

    const result = await Product.updateMany(
      { _id: { $in: PRODUCTS.pid } }, // Filter for documents with matching _id values
      { $inc: { stock: -PRODUCTS.count } }, // Update the stock field with the new value
      (err, result) => {
        if (err) {
          console.error('Error updating products:', err);
        }
      }
    );

    let customerId = selectedUser?._id ? selectedUser._id : '';

    try{
    const newOrder = new Order({
      orderNo:orderNumber,
      userType:selectedUser.email,
      customerId:customerId,
      orders: selectedProducts,
      shippingAddress:shippingAddress,
      billingAddress:billingAddress,
      paymentInfo: {id:transactionId},
      shipping: shipping,
      tax: tax.amount,
      total: subTotal,
      grandTotal: grandTotal,
      cartCount: cartCount,
      orderType: orderType,
      orderStatus: orderStatus,
      customerIp: ip,
    })

    await newOrder.save()
    return res.status(200).json({status: 200,msg:'Order Placed Successfully!'});
  }catch(error){return res.status(500).json({status:500,message:'Internal Server Error!'})}

  },

  async test(req, res, next) {
    console.log(req.ip)
  }

}

module.exports = orderController
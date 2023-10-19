const Joi = require("joi");
const OrderAddress = require('../models/orderAddress')
const Cart = require('../models/cart')

const orderController = {

 async processOrder(req, res, next) {
  console.log(req.body)
  return res.status(200).json({status: 200,msg:"Review Created Successfully!"});
  // 1. validate user input
  //  const getCartSchema = Joi.object({
  //    userId: Joi.string().required(),
  //    email: Joi.string().required(),
  //    keepUpdates: Joi.boolean().required(),
  //    firstName: Joi.string().allow(null).empty(''),
  //    lastName: Joi.string().required(),
  //    address: Joi.string().required(),
  //    appartment: Joi.string().allow(null).empty(''),
  //    city: Joi.string().required(),
  //    country: Joi.string().required(),
  //    province: Joi.string().required(),
  //    postalCode: Joi.string().required(),
  //    phone: Joi.string().required(),
  //    saveAddress: Joi.boolean().required(),
  //  });
  //  const { error } = getCartSchema.validate(req.body);
  
  //  // 2. if error in validation -> return error via middleware
  //  if (error) {
  //    return next(error)
  //  }
  },

}

module.exports = orderController
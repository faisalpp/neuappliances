const mongoose = require('mongoose')

const shippingZoneSchema = new mongoose.Schema({
    title: {type: String, required:true},
    zipCodes: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'ZipCodes' }],
    description: {type: String, required:true},
    shippingMethods: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'ShippingMethods' }],
},{timestamps: true});

module.exports = mongoose.model('ShippingZone',shippingZoneSchema,'shippingZones');
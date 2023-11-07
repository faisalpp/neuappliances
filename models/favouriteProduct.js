const mongoose = require('mongoose')

const favouriteProductSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refPath: 'userType'
      },
      userType: {
        type: String,
        required: true,
        enum: ['User', 'Admin']
      },
    pid: {type: mongoose.SchemaTypes.ObjectId, ref: 'Product',required:true,unique:true},
    product: {type: String,required:true},
},{timestamps: true});

favouriteProductSchema.index({ pid: 1 }, { unique: true });

module.exports = mongoose.model('favouriteProduct',favouriteProductSchema,'favouriteProducts');
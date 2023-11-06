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
    pid: {type: mongoose.SchemaTypes.ObjectId, ref: 'Product',required:true},
},{timestamps: true});

module.exports = mongoose.model('favouriteProduct',favouriteProductSchema,'favouriteProducts');
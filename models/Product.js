var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

name: {
    type: String,
    default: '',
    trim: true,
    required: 'name required'
  },
  discription: {
    type: String,
    default: '',
    trim: true,
    required: 'discription required'
  },
  price: {
    type: String,
     default: '',
    trim: true,
    required: 'price required'
  },

  quantity: {
    type: String,
    trim: true,
    required: 'quantity required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'product');
module.exports = Product;

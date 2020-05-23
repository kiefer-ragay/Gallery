const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: Number,
  product_name: String,
  views: Number,
  date_added: Date,
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
});

const imageSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  image_url: String,
  views: Number,
  height: Number,
  width: Number,
  date_added: Date
});

const Product = mongoose.model('Product', productSchema);

const Image = mongoose.model('Image', imageSchema);

module.exports.Product = Product;
module.exports.Image = Image;
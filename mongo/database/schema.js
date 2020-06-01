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

productSchema.pre('findOne', function() {
  this._startTime = Date.now();
});

productSchema.post('findOne', function() {
  if (this._startTime != null) {
    console.log('Runtime in MS: ', Date.now() - this._startTime);
  }
});

const Product = mongoose.model('Product', productSchema);

const Image = mongoose.model('Image', imageSchema);

module.exports.productSchema = productSchema;
module.exports.imageSchema = imageSchema;
module.exports.Product = Product;
module.exports.Image = Image;
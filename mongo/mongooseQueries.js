const connection = require('./index.js');
const mongoose = require('mongoose');
const Product = require('./schema.js').Product;
const Image = require('./schema.js').Image;

Product.findOne({ product_id: 1}).populate('images').exec( (err, images) => {
  if (err) {
    console.log(err);
  } else {
    console.log(images);
  }
});
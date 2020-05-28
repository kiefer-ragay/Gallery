const connection = require('./index.js');
const mongoose = require('mongoose');
const Product = require('./schema.js').Product;
const productSchema = require('./schema.js').productSchema;



// second argument in populate is optional and specifies what to display from referenced collection
Product.findOne({ product_id: 1}).populate('images', 'image_url').exec( (err, images) => {
  if (err) {
    console.log(err);
  } else {
    console.log(images);
  }
});


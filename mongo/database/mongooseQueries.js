const connection = require('./mongooseIndex.js');
const mongoose = require('mongoose');
const Product = require('./schema.js').Product;
const productSchema = require('./schema.js').productSchema;



// second argument in populate is optional and specifies what to display from referenced collection
const get1 = () => {
  return new Promise((resolve) => {
    Product.findOne({ product_id: 1}).populate('images', 'image_url').exec( (err, images) => {
      if (err) {
        console.log(err);
      } else {
        console.log(images);
        resolve(true);
      }
    });
  });
}
const get2 = () => {
  Product.findOne({ product_id: 5000000}).populate('images', 'image_url').exec( (err, images) => {
    if (err) {
      console.log(err);
    } else {
      console.log(images);
    }
  });
}

const wait3000 = () => {
  console.log('waiting...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 3000)
  });
};

const asyncGetBoth = () => {
  get1()
  .then(wait3000)
  .then(get1)
  .then(wait3000)
  .then(get1)
  .then(wait3000)
  .then(get1)
  .then(wait3000)
  .then(get1)
  .then(wait3000)
  .then(get1)
}

asyncGetBoth();

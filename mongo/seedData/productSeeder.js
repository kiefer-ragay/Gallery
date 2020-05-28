const mongoose = require('mongoose');
const Product = require('../schema.js').Product;
const nameGenerator = require('./productNameGenerator.js');
const imageSetMaker = require('./imageSetMaker.js');
const promise = require('bluebird');

mongoose.connect('mongodb://localhost/gallery', { useNewURLParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to Gallery, seeding...');

  promisedSeeder(3500001, 4000000);


});

const productSeeder = (start, stop) => {
  console.log(`Running seed from ${start} to ${stop}!`);
  const records = [];
  for ( let i = start; i <= stop; i +=1 ) {
    const randomYear = Math.floor(Math.random() * (2021-2012) + 2012);
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 32);
    const newProduct = {};
      newProduct.product_id = i;
      newProduct.productName = nameGenerator();
      newProduct.views = Math.floor(Math.random() * (100000 - 27) + 27);
      newProduct.date_added = new Date(randomYear, randomMonth, randomDay);
      newProduct.images = imageSetMaker(Math.random() * (16 - 8) + 8);

      //Product.save(newProduct);

    records.push(newProduct);

  }
  Product.insertMany(records)
   .then(console.log(`Seeding ${start} to ${stop} complete`))
   .catch( (err) => {
     console.log(err);
   });
}

const promisedSeeder = promise.promisify(productSeeder);

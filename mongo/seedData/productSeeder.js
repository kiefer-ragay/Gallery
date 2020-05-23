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

  let chain = promise.resolve();
  for (let i = 0; i <= 950000; i += 50000) {
    chain = chain.then(promisedSeeder(i, i + 50000)).then(Wait());
  }
  // promisedSeeder(0, 100000)
  //   .then(promisedSeeder(100001, 200000).delay(60000))
  //   .then(promisedSeeder(200001, 300000).delay(60000))
  //   .then(promisedSeeder(300001, 400000).delay(60000))
  //   .then(promisedSeeder(400001, 500000).delay(60000))
  //   .then(promisedSeeder(500001, 600000).delay(60000))
  //   .then(promisedSeeder(600001, 700000).delay(60000))
  //   .then(promisedSeeder(700001, 800000).delay(60000))
  //   .then(promisedSeeder(800001, 900000).delay(60000))
  //   .then(promisedSeeder(900001, 999999).delay(60000))

});

const productSeeder = (start, stop) => {
  for ( let i = start; i <= stop; i +=1 ) {
    const randomYear = Math.floor(Math.random() * (2021-2012) + 2012);
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 32);
    const ProductEntry = new Product({
      product_id: i,
      productName: nameGenerator(),
      views: Math.floor(Math.random() * (100000 - 27) + 27),
      date_added: new Date(randomYear, randomMonth, randomDay),
      images: imageSetMaker(Math.random() * (16 - 8) + 8)
    });
    ProductEntry.save((err, value) => {
      if (err) {
        console.log(err)
      }
    });
  }
  console.log(`Seeding ${start} to ${stop} Complete`);
}

const promisedSeeder = promise.promisify(productSeeder);
function Wait() {
  return new Promise(r => setTimeout(r, 30000));
}
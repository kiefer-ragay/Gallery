const mongoose = require('mongoose');
const Product = require('../schema.js').Product;
const nameGenerator = require('./productNameGenerator.js');
const imageSetMaker = require('./imageSetMaker.js');

mongoose.connect('mongodb://localhost/gallery', { useNewURLParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to Gallery, seeding...');

});

const productSeeder = () => {
  for ( let i = 0; i < 1000000; i ++) {
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
    ImageEntry.save((err, value) => {
      if (err) {
        console.log(err)
      }
    });
  }
}

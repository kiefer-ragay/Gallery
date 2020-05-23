const mongoose = require('mongoose');
const Product = require('../schema.js').Product;

mongoose.connect('mongodb://localhost/gallery', { useNewURLParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open'), () => {
  console.log('Connected to Gallery, seeding...');

}

const productSeeder = () => {
  for ( let i = 0; i < 5; i ++) {
    const randomYear = Math.floor(Math.random() * (2021-2012) + 2012);
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 32);
    const ProductEntry = new Product({
      _id: ObjectId(imageIds[i]),
      image_url: images[i].image_url,
      views: Math.floor(Math.random() * (100000 - 27) + 27),
      height: Math.floor(Math.random() * (2001 - 400) + 400),
      width: Math.floor(Math.random() * (2001 - 400) + 400),
      date_added: new Date(randomYear, randomMonth, randomDay)
    });
    ImageEntry.save((err, value) => {
      if (err) {
        console.log(err)
      }
    });
  }
}

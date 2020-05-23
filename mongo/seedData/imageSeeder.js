const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const Image = require('../schema.js').Image;
const images = require('./images.js');
const imageIds = require('./imageIds.js');

mongoose.connect('mongodb://localhost/gallery', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
  console.log('Connected to Gallery, seeding...');
  imageSeeder();
});

const imageSeeder = () => {
  for ( let i = 0; i < images.length; i ++) {
    const randomYear = Math.floor(Math.random() * (2021-2012) + 2012);
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 32);
    const ImageEntry = new Image({
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
  console.log('Seeding Completed');
}

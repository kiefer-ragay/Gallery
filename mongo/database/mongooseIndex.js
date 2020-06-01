const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gallery', { useNewURLParser: true }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to Database on collection Gallery!');
});

module.exports = connection;

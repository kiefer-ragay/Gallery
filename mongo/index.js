const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gallery', { useNewURLParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to Database on collection Gallery!');
});

const mongoose = require('mongoose');
const Product = require('../schema.js').Product;

mongoose.connect('mongodb://localhost/gallery', { useNewURLParser: true }
);

const db = mongoose.connection;

db.once('open'), () => {

}


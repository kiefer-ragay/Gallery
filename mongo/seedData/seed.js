const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gallery', { useNewURLParser: true }
);

const db = mongoose.connection;
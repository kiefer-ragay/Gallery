require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const url = process.env.GALLERY_DATABASE;

module.exports = (callback) => {
   MongoClient.connect(url, { poolSize: 15 }, (err, client) => {
    if (err) {
      console.log(err)
    } else {
      callback(null, client);
    }
  });
};



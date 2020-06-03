const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost/:27017';
const dbName = 'gallery';
const collectionName = 'products';

module.exports = (callback) => {
   MongoClient.connect(url, { poolSize: 5 }, (err, client) => {
    if (err) {
      console.log(err)
    } else {
      callback(null, client);
    }
  });
};



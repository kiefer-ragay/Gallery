const MongoClient = require('mongobd').MongoClient;

const url = 'mongodb://localhost/:27017';
const dbName = 'gallery';
const collectionName = 'products';

module.exports = () => {
  MongoClient.connect(url, { poolSize : 5 }, (err, client) => {
    if (err) => {
      console.log(err)
    } else {
      return client.db(dbName).collection('products');
    }
  });
};

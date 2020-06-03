const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost/:27017';

module.exports = (callback) => {
   MongoClient.connect(url, { poolSize: 25 }, (err, client) => {
    if (err) {
      console.log(err)
    } else {
      callback(null, client);
    }
  });
};



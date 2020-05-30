const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost/:27017';
const dbName = 'gallery';

const openAndQuery = (query) => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully connected to server through client');
      const db = client.db(dbName);
      const products = db.collection('products');
      query(products, client);
    }
  });
}


const logResults = (err, results) => {
  if (err) {
    console.log(`Got error: ${err}`);
  } else {
    console.log(results);
  }
};

const getProduct = (id, callback) => {

  const query = (products, client) => {
    products.aggregate([{
      $match: {product_id: id}
      },
      {
        $lookup: {
          from: "images",
          localField: "images",
          foreignField: "_id",
          as: "images"
        }
      }
    ]).each((err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
            client.close();
            return false;
          }
      });
  }
  openAndQuery(query);

};

getProduct(1, logResults);

const MongoClient = require('mongodb').MongoClient;
const imageSetMaker = require('./seedData/imageSetMaker.js');
const nameGenerator = require('./seedData/productNameGenerator.js');

const url = 'mongodb://localhost/:27017';
const dbName = 'gallery';

const openAndQuery = (query) => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully connected to database');
      const db = client.db(dbName);
      const products = db.collection('products');
      query(products, client);
    }
  });
};

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
      $match: { product_id: parseInt(id) }
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

const addRandomProduct = (productName, callback) => {
  product = {};
  product.product_name = nameGenerator();
  product.views = 0;
  product.date_added = new Date();
  product.images = imageSetMaker(10);
  product.product_id = Math.random() * 10000000 + 10000001;
  const query = (products, client) => {
    products.insertOne(product, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  };

  openAndQuery(query);
};

const updateProduct = (id, newName, callback) => {
  const query = (products, client) => {
    products.updateOne({ product_id: id }, { product_name: newName }, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  };
  openAndQuery(query);
}

const addNames = () => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully connected to server through client');
      const db = client.db(dbName);
      const products = db.collection('products');
      //const count = products.countDocuments();
      // console.log(count);
      let i = 0;
      let chain = Promise.resolve();
      while (i < 5) {
        chain = chain
          .then(() => {
              promisedUpdate(products, client, i);
            });
          i += 1;
      }
    }
  });
}


// getProduct(1, logResults);
// addNames();

const promisedUpdate = (products, client, id) => {
  return new Promise((resolve) => {
    const newName = nameGenerator();

    products.findOne( {product_id: id}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        resolve();

      }
    });
    // products.updateOne({ product_id: id }, {$set: { 'product_name': newName } }, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(newName);
    //     resolve();
    //   }
    // });
  });
}

module.exports.getProduct = getProduct;
module.exports.addProduct = addRandomProduct;
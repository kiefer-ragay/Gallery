require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const controller = require('../database/mongoQueries.js');

const connection = require('../database/index.js');

let products;
connection((err, client) => {
  products = client.db('gallery').collection('products');
});

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/api/products/:id', (req, res) => {
  controller.getProduct(req.params.id, products, (error, results) => {
    if (error) {
      res.status(500).send(error);
    // } else if (results.length === 0) {
    //   res.status(404).send('Product does not exist');
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/api/products/:product_name', (req, res) => {
  controller.addProduct(req.params.product_name, products, (error, results) => {
    if (error) {
      res.status(500).send(error);
    // } else if (results.length === 0) {
    //   res.status(404).send('Product does not exist');
    } else {
      res.status(200).send(results);
    }
  });
});

const port = 3001;
app.listen(port, () => console.log(`Gallery component ${port}`));




const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const middleware = require('./middleware.js');


const getProduct = require('../database/mongoQueries.js').getProduct;

const app = express();

app.use(compression());
app.use(cors());
app.use(middleware);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/api/products/:id', (req, res) => {
  getProduct(req.params.id, (error, results) => {
    console.log(results);
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




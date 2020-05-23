const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const imageSetMaker = require('./imageSetMaker.js');
const nameGenerator = require('./productNameGenerator');








const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'products.csv'),
  header: [
    { id: 'product_name', title: 'product_name' },
    { id: 'views', title: 'views' },
    { id: 'date_added', title: 'date_added'},
    { id: 'images', title: 'images'}
  ]
});

const records = [];

for (let i = 0; i < 5; i += 1) {
  let newRecord = {};
  newRecord.product_name =

  newRecord.views = Math.floor(Math.random() * (100000 - 27) + 27);
  const randomYear = Math.floor(Math.random() * (2021 - 2012) + 2012);
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 32);
  newRecord.date_added = new Date(randomYear, randomMonth, randomDay);
  newRecord.images = imageSetMaker(Math.floor(Math.random() * (16 - 5) + 5));
  records.push(newRecord);
};

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });
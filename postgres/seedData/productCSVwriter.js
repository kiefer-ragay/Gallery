const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nameGenerator = require('./productNameGenerator');
const dateGenerator = require('./randomDateMaker.js');

const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'products.csv'),
  header: [
    { id: 'product_id', title: 'product_id' },
    { id: 'product_name', title: 'product_name' },
    { id: 'views', title: 'views' },
    { id: 'date_added', title: 'date_added'}
  ]
});

const records = [];

for (let i = 0; i < 10000000; i += 1) {
  let newRecord = {};
  newRecord.product_id = i;
  newRecord.product_name = nameGenerator();
  newRecord.views = Math.floor(Math.random() * (100000 - 27) + 27);
  newRecord.date_added = dateGenerator();
  records.push(newRecord);
};

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });
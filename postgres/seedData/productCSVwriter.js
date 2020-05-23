const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const imageSetMaker = require('./imageSetMaker.js');
const nameGenerator = require('./productNameGenerator');

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

for (let i = 0; i < 5; i += 1) {
  let newRecord = {};
  newRecord.product_id = i;
  newRecord.product_name = nameGenerator();
  newRecord.views = Math.floor(Math.random() * (100000 - 27) + 27);
  const randomYear = Math.floor(Math.random() * (2021 - 2012) + 2012);
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 32);
  newRecord.date_added = new Date(randomYear, randomMonth, randomDay);
  records.push(newRecord);
};

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });
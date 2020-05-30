const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const imageSetMaker = require('./imageSetMaker.js');
const fs = require('fs');

const csvWriter = createCsvWriter({
  // must specify new name for file to prevent overwriting
  path: path.join(__dirname, 'referencesTest.csv'),
  header: [
    { id: 'reference_id', title: 'reference_id' },
    { id: 'product_id', title: 'product_id' },
    { id: 'image_id', title: 'image_id' }
  ]
});


const writeToCSV = (start, end) => {

  const records = [];
  // i must match the number of products in the database!
  let referenceCounter = start * 10;
  for (let i = start; i <= end; i += 1) {
    let imageSet = imageSetMaker(10);
    for (imageId of imageSet) {
      let newRecord = {};
      newRecord.reference_id = referenceCounter;
      newRecord.product_id = i;
      newRecord.image_id = imageId;
      records.push(newRecord);
      referenceCounter += 1;
    }
  };

  csvWriter.writeRecords(records)
    .then(() => {
      console.log(`${start} to ${end}...Done!`);
    });
};

writeToCSV(7500001, 10000000);


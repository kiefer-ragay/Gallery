const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const imageSetMaker = require('./imageSetMaker.js');



const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'references.csv'),
  header: [
    { id: 'reference_id', title: 'reference_id' },
    { id: 'product_id', title: 'product_id' },
    { id: 'image_id', title: 'image_id' }
  ]
});

const writeToCSV = (start, end) => {

  const records = [];
  let referenceCounter = 0;
  // i must match the number of products in the database!
  for (let i = start; i < end; i += 1) {
    let imageSet = imageSetMaker(Math.floor(Math.random() * (15-7) + 7));
    for (imageId of imageSet) {
      let newRecord = {};
      newRecord.product_id = i;
      newRecord.reference_id = referenceCounter;
      newRecord.image_id = imageId;
      records.push(newRecord);
      referenceCounter += 1;
    }
  };

  csvWriter.writeRecords(records)
    .then(() => {
      console.log(`${start} to ${end}...Done!`);
      Promise.resolve();
    });
};


Promise.resolve()
promisedWrite(0, 100000)
.then( () => promisedWrite(100001, 200000))
.catch(console.log('Error Writing'));
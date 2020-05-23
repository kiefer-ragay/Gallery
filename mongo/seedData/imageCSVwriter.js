const images = require('./images.js');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'images.csv'),
  header: [
    { id: 'image_url', title: 'image_url' },
    { id: 'views', title: 'views' },
    { id: 'height', title: 'height' },
    { id: 'width', title: 'width' }
  ]
});

const records = [];

for (let i = 0; i < images.length; i += 1) {
  let newRecord = images[i];
  newRecord.views = Math.floor(Math.random() * (10000 - 27) + 27);
  newRecord.height = Math.floor(Math.random() * (2000 - 400) + 400);
  newRecord.width = Math.floor(Math.random() * (2000 - 400) + 400);
  records.push(newRecord)
};

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });




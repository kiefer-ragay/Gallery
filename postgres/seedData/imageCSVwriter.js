const images = require('./images.js');
const path = require('path');
const dateGenerator = require('./randomDateMaker.js');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'images.csv'),
  header: [
    { id: 'image_id', title: 'image_id' },
    { id: 'image_url', title: 'image_url' },
    { id: 'views', title: 'views' },
    { id: 'height', title: 'height' },
    { id: 'width', title: 'width' },
    { id: 'date_added', title: 'date_added'}
  ]
});

const records = [];

for (let i = 0; i < images.length; i += 1) {
  let newRecord = images[i];
  newRecord.image_id = i;
  newRecord.views = Math.floor(Math.random() * (100000 - 27) + 27);
  newRecord.height = Math.floor(Math.random() * (2001 - 400) + 400);
  newRecord.width = Math.floor(Math.random() * (2001 - 400) + 400);
  newRecord.date_added = dateGenerator();
  records.push(newRecord);
};

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });




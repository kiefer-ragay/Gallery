const images = require('./images.js');
const path = require('path');
const imageIds = require('./imageIds.js');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'images.csv'),
  header: [
    { id: '_id', title: '_id' },
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
  newRecord._id = imageIds[i];
  newRecord.views = Math.floor(Math.random() * (100000 - 27) + 27);
  newRecord.height = Math.floor(Math.random() * (2001 - 400) + 400);
  newRecord.width = Math.floor(Math.random() * (2001 - 400) + 400);
  const randomYear = Math.floor(Math.random() * (2021-2012) + 2012);
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 32);
  newRecord.date_added = new Date(randomYear, randomMonth, randomDay);
  records.push(newRecord);
};

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });




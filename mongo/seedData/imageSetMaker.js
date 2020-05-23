const imageIds = require('./imageIds.js');
const ObjectId = require('mongodb').ObjectID;

const imageSetMaker = (numComboItems) => {
  const imageSet = new Set();
  while (imageSet.size < numComboItems) {
    imageSet.add(ObjectId(imageIds[Math.floor(Math.random() * 100)]));
  }
  return Array.from(imageSet);
};


console.log
module.exports = imageSetMaker;
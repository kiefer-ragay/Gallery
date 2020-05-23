const ObjectId = require('mongodb').ObjectID;

const imageSetMaker = (numComboItems) => {
  const imageSet = new Set();
  while (imageSet.size < numComboItems) {
    imageSet.add(Math.floor(Math.random() * 100)]);
  }
  return Array.from(imageSet);
};


module.exports = imageSetMaker;
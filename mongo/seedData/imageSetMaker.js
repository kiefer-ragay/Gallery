const imageIds = require('./imageIds.js');

const imageSetMaker = (numComboItems) => {
  const imageSet = new Set();
  while (imageSet.size < numComboItems) {
    imageSet.add(imageIds[Math.floor(Math.random() * 100)]);
  }
  return Array.from(imageSet);
};

module.exports = imageSetMaker;
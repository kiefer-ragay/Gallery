// to be used in generating reference table

const imageSetMaker = (numComboItems) => {
  const imageSet = new Set();
  while (imageSet.size < numComboItems) {
    imageSet.add(Math.floor(Math.random() * 100));
  }
  return Array.from(imageSet).sort( (a, b) => (
    a-b
  ));
};


module.exports = imageSetMaker;
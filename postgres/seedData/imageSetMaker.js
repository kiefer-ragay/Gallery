// to be used in generating reference table

const imageSetMaker = (numComboItems) => {
  const imageSet = new Set();
  while (imageSet.size < numComboItems) {
    imageSet.add(Math.floor(Math.random() * 100));
  }
  console.log(imageSet);
  return Array.from(imageSet).sort( (a, b) => (
    a-b
  ));
};

console.log(imageSetMaker(6));

module.exports = imageSetMaker;
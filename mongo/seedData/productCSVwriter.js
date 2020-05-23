const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const imageSetMaker = require('./imageSetMaker.js');

const adjectives = [
  'Frumpy', 'Pure', 'Outdated', 'Tasteless', 'Tasteful',
  'Melted', 'Arrogant', 'Dusty', 'Immense', 'Disproportionate',
  'Colossal', 'Ginormous', 'Mediocre', 'Puny', 'Average', 'Ugly',
  'Prickly', 'Broken', 'Filthy', 'Defiant', 'Ill-Conceived',
  'Wet', 'Magnificent', 'Fabulous', 'Poorly-Constructed',
  'Just Okay', 'Used', 'Mysterious', "Rambunctious", 'Fergilicious',
  'Giant', 'Aggressive', 'Triumphant', 'Fake', 'Expensive', 'Rusty'
];

const colors = [
  'Mauve', 'Flesh-Colored', 'Brown', 'Magenta', 'Rainbow',
  'Pink', 'Flesh-Colored', 'Red', 'Razzmatazz', 'Periwinkle',
  'Sage', 'Fushcia', 'Strawberry Red', 'Lipstick Green', 'Pickle-Colored',
  'Butterscotch Yellow', 'Crusty Brown', 'Fancy Green', 'Bronze', 'Blue',
  'Lemon Zest Yellow', 'Raisin Purple', 'Musty Orange', 'Mahogany'
];

const toys = [
  'Fergie', 'Bat', 'Obi Wan Kenobi', 'Star Wars', 'Land Before Time',
  'Indiana Jones', 'Madonna', 'Dinosaur', 'Oompa Loompa', 'President Trump',
  'Manhattan City', 'Orangutan', 'Motorcycle', 'Minions', 'Demon Bull King', 'Pigsy Food Truck',
  'Beanstalk', 'Monkey King', 'Princess Peach', 'Pikachu', 'Bulbasaur', 'Pokemon',
  'Millenial', 'Gen Z', 'Boomer', 'Amelia Lockhart', 'Darth Vader', 'R2-D2',
  'Jar Jar Binks', 'Wookie', 'Catwoman', 'Catman', 'Batman', 'Teen Titans',
  'Tween Titans', 'My Sweet 16', 'Newborne Child', 'Hilary', 'Karen', 'Racecar',
  'Orc', 'Gnome', 'Construction Man', 'Fat Chocobo', 'Wolverine', 'Jean Gray'
];

const setNames = [
  'Piece', 'Collection', 'Diorama', 'Set', 'Thing',
  'Piece', 'Collection', 'Diorama', 'Set', 'Assemblage',
  'Assortment'
];






const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'products.csv'),
  header: [
    { id: 'product_name', title: 'product_name' },
    { id: 'views', title: 'views' },
    { id: 'date_added', title: 'date_added'},
    { id: 'images', title: 'images'}
  ]
});

const records = [];

for (let i = 0; i < 5; i += 1) {
  let newRecord = {};
  newRecord.product_name = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' +
    colors[Math.floor(Math.random() * colors.length)] + ' ' + toys[Math.floor(Math.random() * toys.length)] + ' ' + setNames[Math.floor(Math.random() * setNames.length)];

  newRecord.views = Math.floor(Math.random() * (100000 - 27) + 27);
  const randomYear = Math.floor(Math.random() * (2021 - 2012) + 2012);
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 32);
  newRecord.date_added = new Date(randomYear, randomMonth, randomDay);
  newRecord.images = imageSetMaker(Math.floor(Math.random() * (16 - 5) + 5));
  records.push(newRecord);
};

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });
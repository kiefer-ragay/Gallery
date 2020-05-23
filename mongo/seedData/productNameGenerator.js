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

const productNameGenerator = () => (
  adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' +
    colors[Math.floor(Math.random() * colors.length)] + ' ' + toys[Math.floor(Math.random() * toys.length)] + ' ' + setNames[Math.floor(Math.random() * setNames.length)]
);

module.exports = productNameGenerator;
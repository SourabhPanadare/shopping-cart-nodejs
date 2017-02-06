var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products =[
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game',
    description: 'The main character must complete quests and slay wild animals and monsters to earn skill points, which are used to increase basic attributes, improve skills, and learn trades. They are spent by finding the appropriate teacher. Several skills have only one "level" (Sneaking, Acrobatics), while the fighting skills (one-handed weapons, two-handed weapons, bows and crossbows) have two proficiency levels.',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg',
    title: 'Game of Thrones',
    description: 'Game of Thrones is roughly based on the storylines of A Song of Ice and Fire,[3][4] set in the fictional Seven Kingdoms of Westeros and the continent of Essos.',
    price: 20
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/42/Darksiders_Cover.jpg',
    title: 'Darksiders',
    description: 'In Darksiders the player takes control of War, one of the Four Horsemen of the Apocalypse in third-person perspective and engages in combat, puzzles, and exploration. The world is divided into separate locations with many areas initially inaccessible until War regains many of his lost weapons and abilities.',
    price: 40
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    title: 'Witcher 3',
    description: 'The Witcher 3: Wild Hunt is an action role-playing game set in an open world environment which is more than 30 times larger than previous Witcher games, necessitating the use by players to sail by boat to some locations and ride on horseback to others',
    price: 50
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Gowbox.jpg',
    title: 'God of War',
    description: 'God of War is a third-person single player video game viewed from a fixed camera perspective. The player controls the character Kratos in combo-based combat, platforming, and puzzle game elements, and battles foes who primarily stem from Greek mythology, including undead soldiers, harpies, minotaurs, Medusa and her Gorgons, cyclopes, wraiths, Sirens, satyrs, centaurs, cerberuses, and boss and a giant minotaur known as Pandoras Guardian.',
    price: 60
  })
];

var done = 0;
for (var i = 0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if( done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}

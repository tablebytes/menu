const MenuItem = require('./MenuItem.js');
const faker = require('faker');
const db = require('./index.js');

const sampleItems = [];


class Item {
  constructor(restaurantId, menus, types) {
    this.item = [faker.commerce.productMaterial(), faker.commerce.product()].join(' ');
    const descriptorsCount = Math.floor(Math.random() * Math.floor(3));
    const descriptors = [];
    for (let i = 0; i <= descriptorsCount; i += 1) {
      descriptors.push(faker.commerce.productName());
      if (i < descriptorsCount) {
        if (i === 0) {
          descriptors[i] += ' with';
        } else {
          descriptors[i] += ' and';
        }
      } else {
        descriptors[i] += '.';
      }
    }
    this.description = descriptors.join(' ');
    this.menu = menus[Math.floor(Math.random() * Math.floor(menus.length))];
    this.type = types[Math.floor(Math.random() * Math.floor(types.length))];
    this.price = (faker.commerce.price() / 100 + 3).toFixed(2);
    this.restaurantId = restaurantId;
  }
}

const populateItems = () => {
  // Restaurants
  for (let i = 1; i <= 100; i += 1) {
    const menuCount = Math.floor(Math.random() * Math.floor(5)) + 2;
    const menus = [];
    const menuChoices = {0: 'Breakfast', 1: 'Lunch', 2: 'Dinner', 3: 'Brunch', 4: 'Weekend', 5: 'Special', 6: 'Evening', 7: 'Holiday', 8: 'Morning', 9: 'Drinks', 10: 'Beer'};
    for (let j = 0; j <= menuCount; j += 1) {
      const rand = Object.keys(menuChoices)[Math.floor(Math.random() * Math.floor(Object.keys(menuChoices).length))];
      menus.push(menuChoices[rand]);
      delete menuChoices[rand];
    }

    const typeCount = Math.floor(Math.random() * Math.floor(3)) + 1;
    const types = [];
    for (let j = 0; j < typeCount; j += 1) {
      types.push(faker.commerce.productMaterial());
    }

    // Items
    const itemCount = Math.floor(Math.random() * Math.floor(300)) + 150;
    for (let j = 0; j < itemCount; j += 1) {
      sampleItems.push(new Item(i, menus, types));
    }
  }
}

populateItems();

const insertSampleItems = () => {
  MenuItem.model.create(sampleItems)
    .then(() => db.close());
};

insertSampleItems();

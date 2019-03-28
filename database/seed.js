const MenuItem = require('./MenuItem.js');
const faker = require('faker');
const db = require('./index.js');

const sampleItems = [];


class Item {
  constructor(restaurantId, meals, types) {
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
    this.meal = meals[Math.floor(Math.random() * Math.floor(meals.length))];
    this.type = types[Math.floor(Math.random() * Math.floor(types.length))];
    this.price = (faker.commerce.price() / 100 + 3).toFixed(2);
    this.restaurantId = restaurantId;
  }
}

const populateItems = () => {
  // Restaurants
  for (let i = 1; i <= 100; i += 1) {
    const mealCount = Math.floor(Math.random() * Math.floor(5)) + 2;
    const meals = [];
    for (let j = 0; j < mealCount; j += 1) {
      meals.push(faker.commerce.productAdjective());
    }
    const typeCount = Math.floor(Math.random() * Math.floor(3)) + 1;
    const types = [];
    for (let j = 0; j < typeCount; j += 1) {
      types.push(faker.commerce.productMaterial());
    }

    // Items
    const itemCount = Math.floor(Math.random() * Math.floor(75)) + 25;
    for (let j = 0; j < itemCount; j += 1) {
      sampleItems.push(new Item(i, meals, types));
    }
  }
}

populateItems();

const insertSampleItems = () => {
  MenuItem.create(sampleItems)
    .then(() => db.disconnect());
};

insertSampleItems();

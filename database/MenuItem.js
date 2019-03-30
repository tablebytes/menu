const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const menuItemSchema = new mongoose.Schema({
  item: String,
  description: String,
  menu: String,
  type: String,
  price: Number,
  restaurantId: Number,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

const getMenus = rId => MenuItem.find({ restaurantId: rId }).distinct('menu');

const getMenu = (rId, menu) => MenuItem.find({ restaurantId: rId, menu });

exports.model = MenuItem;
exports.getMenus = getMenus;
exports.getMenu = getMenu;

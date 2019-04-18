const express = require('express');
const bodyParser = require('body-parser');
const MenuItem = require('../database/MenuItem');
const path = require('path');
const cors = require('cors');

const port = 3004;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));
//read
app.get('/api/restaurants/:id/menus', (req, res) => {
  MenuItem.getMenus(req.params.id)
    .then(menus => res.send(menus));
});

app.get('/api/restaurants/:id/menus/:menu', (req, res) => {
  MenuItem.getMenu(req.params.id, req.params.menu)
    .then(menu => res.send(menu));
});

//delete
app.delete('/api/restaurants/:id/menus/:menu', (req, res) => {
  MenuItem.deleteMenu(req.params.id, req.params.menu)
  .then(menu => res.send(`Deleted ${menu} \n`));
  
});
//update
app.put('/api/restaurants', (req, res) => {
  var changerObj = req.body;

  var query = changerObj.query;
  var changesObj = changerObj.change;

  MenuItem.updateItem(query, changesObj);

  res.send('Update \n');
});
//create test: curl -X POST http://127.0.0.1:3004/api/restaurants/1/menus/Holiday 
//-H "Content-Type: application/json" -d 
//'{"item":"steak fish","description":"yum","menu":"Holiday","type":"Lunch","price":"4.85","restaurantId":"1"}'

app.post('/api/restaurants', (req, res) => {
  var descriptionObj = req.body;
  console.log('Create', descriptionObj);
  MenuItem.createItem(descriptionObj)
  .then(menu => res.send('Created ${menu} \n'));
  
})


const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});


module.exports = app;
module.exports.server = server;
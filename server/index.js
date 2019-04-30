require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../database/postgresdb.js');
const path = require('path');
const cors = require('cors');


const port = 3004;
const app = express();

app.use(cors());

app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));
//read
app.get('/api/restaurants/:id/menus', (req, res) => {

  pool.getMenus(req.params.id, (err, result) => {
    if(err) {
      console.log(err);
    }
    var menuNames= [];
    for(var i = 0; i < result.rows.length; i++) {
      menuNames.push(result.rows[i].menu);
    }
    
    res.send(menuNames);
  });
});

app.get('/api/restaurants/:id/menus/:menu', (req, res) => {

  pool.getMenu(req.params.id, req.params.menu, (err, result) => {
   if(err) {
     console.log(err);
   }
   console.log('RESULT: ', result);
   res.send(result.rows)
 })
});

//delete
app.delete('/api/restaurants/:id/menus/:menu', (req, res) => {
 
  
});
//update
app.put('/api/restaurants', (req, res) => {
  var changerObj = req.body;

  var query = changerObj.query;
  var changesObj = changerObj.change;

 

  res.send('Update \n');
});
//create test: curl -X POST http://127.0.0.1:3004/api/restaurants/1/menus/Holiday 
//-H "Content-Type: application/json" -d 
//'{"item":"steak fish","description":"yum","menu":"Holiday","type":"Lunch","price":"4.85","restaurantId":"1"}'

app.post('/api/restaurants', (req, res) => {
  var descriptionObj = req.body;
  console.log('Create', descriptionObj);
 
  
})


const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});


module.exports = app;
module.exports.server = server;
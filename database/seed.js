const faker = require('faker');
const fs = require('fs');
const path = require('path');

// return a comma seperated string of data
var makeRow = (restaurantId, index) => {
  const menuChoices = ['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Weekend',
   'Special', 'Kids', 'Holiday', 'Wine', 'Drinks', 'Beer'];

  const typeChoices = ['Appetizers', 'Snacks', 'Entrees', 'Tapas',
  'Dessert', 'Sides', 'Main', 'Special'];

  var food = [faker.commerce.productMaterial(), faker.commerce.product()].join(' ');
  var description = faker.lorem.sentence();
  var menu = menuChoices[Math.floor(Math.random() * Math.floor(menuChoices.length))];
  var type = typeChoices[Math.floor(Math.random() * Math.floor(typeChoices.length))];
  var price = (faker.commerce.price() / 100 + 3).toFixed(2);
  
  return `${index},${restaurantId},${food},${description},${menu},${type},${price}`;
};

// add data to csv
const csvFile = path.join(__dirname, '/../data.csv');
const pen = fs.createWriteStream(csvFile, 'utf8');

var writeToCSV = (writer, encoding) => {
  //10000000
  var rowsToGenerate = 10000000;
  var rowNum = 0;
  var index = 0;
  write();
  function write() {  
    var ok = true;

    do {
      rowsToGenerate--;
      rowNum++;
      if(rowsToGenerate === 0) {

        for(var j = 0; j < 4; j++) {
          index++;
          writer.write(`${makeRow(rowNum, index)}\n`, encoding);
        }

      } else {
        for(var j = 0; j < 4; j++) {
          index++;
          ok = writer.write(`${makeRow(rowNum, index)}\n`, encoding);
        }
      }
    } while(rowsToGenerate > 0 && ok) {
      if (rowsToGenerate > 0) {
        writer.once('drain', write);
      }
    }
  }
};

writeToCSV(pen, 'utf8');



const serverIndex = require('../server/index');
const mongoose = require('mongoose');
const MenuItem = require('../database/MenuItem');

const mongoUri = 'mongodb://localhost/openTableMenu';
const port = 3005;

describe('', function() {
  var db;
  var server;

  // var clearDB = (connection, collection, done) => {
  //   connection.collection.drop()
  //     .then(done);
  // };

  // beforeEach(function(done) {
  //   db = mongoose.connect(mongoUri);
  //   // clearDB(db, 'menuitems', () => {
  //     server = serverIndex.listen(port, done);
  //   // });

  //   afterEach(() => server.close());
  // });

  describe('Database Schema', () => {
    let items;
    test('contains a menuItem table', (done) => {
      MenuItem.model.find()
        .then(results => {
          items = results;
          expect(results).toBeTruthy();
          done();
        })
    });

    test('contains correct columns', (done) => {
      let expected = ['item', 'menu', 'description', 'restaurantId', 'type', 'price', '_id', '__v'];
      console.log('KEYS: ' + Object.keys(items[0].toJSON()));
      expect(Object.keys(items[0].toJSON())).toEqual(expect.arrayContaining(expected));
      done();
    })
  })

});
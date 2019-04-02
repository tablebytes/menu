const request = require('supertest');
const MenuItem = require('../database/MenuItem');
const server = require('../server/index');

describe('', function() {
  
  describe('Database Schema Test Suite', () => {
    let items;
    test('it contains a menuItem table', done => {
      MenuItem.model.find()
        .then(results => {
          items = results;
          expect(results).toBeTruthy();
          done();
        })
    });

    test('it contains correct columns', done => {
      let expected = ['item', 'menu', 'description', 'restaurantId', 'type', 'price', '_id', '__v'];
      expect(Object.keys(items[0].toJSON())).toEqual(expect.arrayContaining(expected));
      done();
    })
  })

  describe('API Test Suite', () => {
    test('it receives data from the server when requesting menus', done => {
      request(server)
        .get('/api/restaurants/1/menus')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
    })

    test('it receives data from the server when requesting a specific menu', done => {
      request(server)
        .get('/api/restaurants/1/menus/0')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
    })
  });

});
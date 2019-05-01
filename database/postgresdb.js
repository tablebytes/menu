const dbInfo = require('../dbInfo.js');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: dbInfo.userName,
    host: 'http://ec2-3-93-152-7.compute-1.amazonaws.com/',
    database: 'postgres',
    password: dbInfo.password,
    port: dbInfo.port 
})

pool.query(
    'CREATE DATABASE menudb',
    (err) => {
        if(err) {
            //console.log(err);
        }
        console.log('added db');
    }
)

const menudbPool = new Pool({
    user: dbInfo.userName,
    host: 'http://ec2-3-93-152-7.compute-1.amazonaws.com/',
    database: 'menudb',
    password: dbInfo.password,
    port: dbInfo.port 
})

menudbPool.query(
    'CREATE TABLE items ( \
     _id INTEGER, \
     restaurantId INTEGER, \
     item VARCHAR(30), \
     description VARCHAR(255), \
     menu VARCHAR(30), \
     type VARCHAR(30), \
     price REAL \
    )',
    (err) => {
        if(err) {
            //console.log(err)
        }
        console.log('added table');
    }
)

exports.getMenus = (restaurantId, cb) => {
    menudbPool.query(
        'SELECT DISTINCT menu FROM items WHERE restaurantId = $1;',
        [restaurantId],
        cb
    )
}

exports.getMenu = (restaurantId, menu, cb) => {
   menudbPool.query(
       'SELECT item, type, price, description FROM items WHERE restaurantId = $1 AND menu = $2;',
       [restaurantId, menu],
       cb
   ) 
}

// CREATE INDEX rest_id ON items(restaurantId)
// \COPY items(_id, restaurantId, item, description, menu, type, price) FROM '/Users/sebastianward/Desktop/HackReactor2/SystemDesignCapstone/menu/data.csv' DELIMITER ',';

exports.pool = pool;

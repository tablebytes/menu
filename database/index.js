const mongoose = require('mongoose');

//const mongoUri = 'mongodb://database/openTableMenu';
const mongoUri = 'mongodb://127.0.0.1/openTableMenu';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;

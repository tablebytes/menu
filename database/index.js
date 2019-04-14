const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/openTableMenu';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;

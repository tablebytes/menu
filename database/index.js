const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/openTableMenu';

mongoose.connect(mongoUri);

const db = mongoose.connection;

module.exports = db;

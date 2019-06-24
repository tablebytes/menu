const mongoose = require('mongoose');

//const mongoUri = 'mongodb://database/openTableMenu';
const mongoUri = 'mongodb://DATABASE IP FILL ME IN/openTableMenu';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;

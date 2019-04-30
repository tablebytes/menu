const fs = require('fs');
const path = require('path');
const pool = require('./postgresdb.js');

const filePath = path.join(__dirname, '/../data.csv');
const readStream = fs.createReadStream(filePath);

readStream.on('data', (chunk) => {
    var rowChunk = chunk.toString()[0];
    console.log(rowChunk)
   
   // console.log(rowChunk);
})

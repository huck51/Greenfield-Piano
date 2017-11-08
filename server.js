/*************************************************
* This is not operational
*************************************************/

const express = require('express');
const Piano = require('./index.html');


const server = express();

server.get('/piano', (req, res) => {
  res.send(Piano);
});

server.listen(3000);

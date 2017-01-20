'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const admin = require('./src/server/routes/admin');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World! From coBeats');
});

app.listen(port, () => {
  console.log(`CoBeats is running on port ${port} ...`);
});

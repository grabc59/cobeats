'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.send('Hello World! From coBeats');
});

app.listen(port, () => {
  console.log(`CoBeats is running on port ${port} ...`);
});

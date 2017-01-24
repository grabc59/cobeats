'use strict';

const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const usersRoute = require('./src/server/routes/users-route.js')

const app = express();

app.set('views', path.join(__dirname, 'src/client'));
app.use(express.static(path.join(__dirname, 'src/client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('src/client/index.html');
});

app.use('/users-route', usersRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handlers
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handlers
// no stacktrace leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.listen(port, () => {
  console.log(`CoBeats is running on port ${port} ...`);
});

module.exports = app;

'use strict';

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = process.env.PORT || 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');

//////////////////////////////////////
/////// ROUTE FILE DECLARATIONS
//////////////////////////////////////
const users = require('./src/server/routes/users');
const messages = require('./src/server/routes/messages');

//////////////////////////////////////
/////// MIDDLEWARE
//////////////////////////////////////
app.use(logger('short'));

app.set('views', path.join(__dirname, 'src/client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'src/client')));
app.use('/users', users);
app.use('/messages', messages);

//////// WILDCARD ROUTE
  // allows user to refresh the page while on an angular route 
  // example: refresh http://localhost:3000/main
  // >> no matching express routes besides this wildcard
  // >> server sends index.html 
  // >> browser loads angular from the index
  // >> angular reads the url and loads the right view
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'src/client')});
});

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
  console.log(`CoBeats is running on http://localhost:${port} ...`);
});

module.exports = app;

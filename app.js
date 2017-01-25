'use strict';

//////////////////////////////////////
/////// SERVER REQUIREMENTS
//////////////////////////////////////
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = process.env.PORT || 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');

//////////////////////////////////////
/////// SOCKET VARIABLES
//////////////////////////////////////
const connected_users = [];
const connections = [];

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

//////////////////////////////////////
//////////      SOCKET SERVER
//////////////////////////////////////
io.sockets.on('connection', function(socket) {

  //////////// NEW CONNECTION EVENT
  connections.push(socket);
  // informational logs
  console.log('Connected: %s sockets connected', connections.length);
  console.log(connections.length);

  //////////// DISCONNECT EVENT
  socket.on('disconnect', function(data) {
    if (!socket.username) return;
    connected_users.splice(connected_users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket),1);
    console.log('disconnected: %s sockets connected', connections.length);
  });

  //////////// SEND MESSAGE EVENT
  socket.on('send message', function(data) {
    console.log(data);
    io.sockets.emit('new message', {msg: data, user: socket.username});
  });

  //////////// NEW USER EVENT
  socket.on('new user', function(data, callback) {
    callback(true);
    socket.username = data;
    connected_users.push(socket.username);
    updateUsernames();
    io.sockets.emit('new user notification', socket.username);
  });

  //////////// GET USERNAMES
  function updateUsernames() {
    io.sockets.emit('get users', connected_users);
  }

  //////////// USER IS TYPING EVENT
  socket.on("typing", function(data) {
    io.sockets.emit('isTyping', {
      isTyping: data,
      person: socket.username,
    });
  });
});

server.listen(port, () => {
  console.log(`CoBeats is running on http://localhost:${port} ...`);
});

module.exports = app;

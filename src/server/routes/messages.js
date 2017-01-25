'use strict';

const express = require('express');
const router = express.Router();
const messagesQueries = require('../db/messagesQueries');
const usersQueries = require('../db/usersQueries')

// *** GET all messages *** //
router.get('/', (req, res, next) => {
  // messagesQueries.getAllMessages() // vanilla query
  messagesQueries.getAllMessagesWithUsernames() // query that resolves message sender usernames from the db
  .then((messages) => {
    res.status(200).json(messages);
  })
  .catch((error) => {
    next(error);
  });
});

// *** GET single message by id *** //
router.get('/:id', (req, res, next) => {
  messagesQueries.getSingleMessage(req.params.id)
  .then((messages) => {
    res.status(200).json(messages);
  })
  .catch((error) => {
    next(error);
  });
});

// *** POST create single message *** //
router.post('/', (req, res, next) => {
  messagesQueries.addMessage(req.body)
  .then((messageID) => {
    return messagesQueries.getSingleMessage(messageID);
  })
  .then((message) => {
    res.status(200).json(message);
  })
  .catch((error) => {
    next(error);
  });
})

// *** PUT update a single message ***//
router.put('/:id', (req, res, next) => {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  messagesQueries.updateMessage(req.params.id, req.body)
  .then(function() {
    return messagesQueries.getSingleMessage(req.params.id);
  })
  .then(function(message) {
    res.status(200).json(message);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** DELETE a single message *** //
router.delete('/:id', (req, res, next) => {
  messagesQueries.getSingleMessage(req.params.id)
 .then(function(messages) {
   messagesQueries.deleteMessage(req.params.id)
   .then(function() {
     res.status(200).json(messages);
   })
   .catch(function(error) {
     next(error);
   });
 }).catch(function(error) {
   next(error);
 });
});

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const userQueries = require('../db/usersQueries');

// *** GET all users *** //
router.get('/', (req, res, next) => {
  userQueries.getAllUsers()
  .then((users) => {
    res.status(200).json(users);
  })
  .catch((error) => {
    next(error);
  });
});

// *** GET single resource by id *** //
router.get('/:id', (req, res, next) => {
  userQueries.getSingleUsers(req.params.id)
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) => {
    next(error);
  });
});

// *** POST create single resource *** //
router.post('/', (req, res, next) => {
  userQueries.addUsers(req.body)
  .then((userID) => {
    return userQueries.getSingleUsers(userID);
  })
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) => {
    next(error);
  });
});

// *** PUT update a single resource ***//
router.put('/:id', (req, res, next) => {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  userQueries.updateUsers(req.params.id, req.body)
  .then(function() {
    return userQueries.getSingleUsers(req.params.id);
  })
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** DELETE a single resource *** //
router.delete('/:id', (req, res, next) => {
  userQueries.getSingleUsers(req.params.id)
 .then(function(user) {
   userQueries.deleteUsers(req.params.id)
   .then(function() {
     res.status(200).json(user);
   })
   .catch(function(error) {
     next(error);
   });
 }).catch(function(error) {
   next(error);
 });
});

module.exports = router;

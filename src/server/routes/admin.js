'use strict';

const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

// *** GET all users *** //
router.get('/users', (req, res, next) => {
  queries.getAll()
  .then((users) => {
    res.status(200).json(users);
  })
  .catch((error) => {
    next(error);
  });
});

// *** GET single user by id *** //
router.get('/users/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) => {
    next(error);
  });
});

module.exports = router;

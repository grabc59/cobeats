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

module.exports = router;

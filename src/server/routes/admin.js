'use strict';

const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

// *** GET all users *** //
router.get('/users', (req, res, next) => {
  res.send('Send all users back');
});

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('users')
    .orderBy('username')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

//
// router.get('/:username', authorize, function(req, res, next) {
//   knex('users')
//     .select('username')
//     .where({ username: req.params.username })
//     .first()
//     .then(function(results) {
//       if (results) {
//         res.send(results);
//       } else {
//         res.sendStatus(404);
//       }
//     })
//     .catch(function(err) {
//       next(err);
//     });
// });
//
//

router.post('/', (req, res, next) => {
  console.log(req.body);
  return knex('users')
    .insert({
      username: req.body.username,
    })
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      next(err);
    });
});


module.exports = router;

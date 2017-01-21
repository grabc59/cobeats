'use strict';

const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

// *** GET all resources *** //
router.get('/users', (req, res, next) => {
  queries.getAll()
  .then((users) => {
    res.status(200).json(users);
  })
  .catch((error) => {
    next(error);
  });
});

// *** GET single resource by id *** //
router.get('/users/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) => {
    next(error);
  });
});

// *** POST create single resource *** //
router.post('/users', (req, res, next) => {
  queries.add(req.body)
  .then((userID) => {
    return queries.getSingle(userID);
  })
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) => {
    next(error);
  });
});

// *** PUT update a single resource ***//
router.put('/users/:id', (req, res, next) => {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  queries.update(req.params.id, req.body)
  .then(() => {
    return queries.getSingle(req.params.id);
  })
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) => {
    next(error);
  });
});

// *** DELETE a single resource *** //
router.delete('/users/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
  .then((user) => {
    queries.deleteResource(req.params.id)
    .then(() => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
  })
  .catch((error) => {
    next(error);
  });
});

module.exports = router;

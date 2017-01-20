'use strict';

const knex = require('./knex');

function users() {
  return knex('users');
}

// *** queries *** //

function getAll() {
  return users().select();
}

function getSingle(userID) {
  return users().where('id', parseInt(userID)).first();
}

function add(user) {
  return users().insert(user, 'id');
}

function update(userID, updates) {
  return users().where('id', parseInt(userID)).update(updates);
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update
};

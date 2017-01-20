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

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add
};

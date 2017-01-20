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

module.exports = {
  getAll: getAll,
  getSingle: getSingle

};

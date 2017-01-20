'use strict';

const knex = require('./knex');

function users() {
  return knex('users');
}

// *** queries *** //

function getAll() {
  return users().select();
}

module.exports = {
  getAll: getAll
};

'use strict';

const knex = require('./knex');

function users() {
  return knex('users');
}

// *** user queries *** //

function getAll() {
  return users().select();
}

function getSingle(resourceID) {
  return users().where('id', parseInt(resourceID)).first();
}

function add(resource) {
  return users().insert(resource, 'id');
}

function update(resourceID, updates) {
  return users().where('id', parseInt(resourceID)).update(updates);
}

function deleteResource(resourceID) {
  return users().where('id', parseInt(resourceID)).del();
}

// // *** message queries *** //
//
// function getAll() {
//   return users().select();
// }
//
// function getSingle(resourceID) {
//   return users().where('id', parseInt(resourceID)).first();
// }
//
// function add(resource) {
//   return users().insert(resource, 'id');
// }
//
// function update(resourceID, updates) {
//   return users().where('id', parseInt(resourceID)).update(updates);
// }
//
// function deleteResource(resourceID) {
//   return users().where('id', parseInt(resourceID)).del();
// }

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteResource: deleteResource
};

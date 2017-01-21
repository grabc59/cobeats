'use strict';

const knex = require('./knex');

function resources() {
  return knex('resources');
}

// *** queries *** //

function getAll() {
  return resources().select();
}

function getSingle(resourceID) {
  return resources().where('id', parseInt(resourceID)).first();
}

function add(resource) {
  return resources().insert(resource, 'id');
}

function update(resourceID, updates) {
  return resources().where('id', parseInt(resourceID)).update(updates);
}

function deleteResource(resourceID) {
  return resources().where('id', parseInt(resourceID)).del();
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteResource: deleteResource
};

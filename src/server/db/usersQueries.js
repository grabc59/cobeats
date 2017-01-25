'use strict';

const knex = require('./knex');

function users() {
  return knex('users');
}

// *** user queries *** //

function getAllUsers() {
  return users().select();
}

function getSingleUsers(userID) {
  return users().where('id', parseInt(userID)).first();
}
////// custom get single userID
function getSingleUserIDByUsername(username) {
  return users().where('username', username).first();
}

function addUsers(user) {
  return users().insert(user, 'id');
}

function updateUsers(userID, updates) {
  return users().where('id', parseInt(userID)).update(updates);
}

function deleteUsers(userID) {
  return users().where('id', parseInt(userID)).del();
}

module.exports = {
  getSingleUserIDByUsername: getSingleUserIDByUsername,
  getAllUsers: getAllUsers,
  getSingleUsers: getSingleUsers,
  addUsers: addUsers,
  updateUsers: updateUsers,
  deleteUsers: deleteUsers
};

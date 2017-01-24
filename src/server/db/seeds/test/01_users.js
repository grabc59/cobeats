'use strict';

exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        username: 'chris'
      });
    }).then(function () {
      return knex('users').insert({
        username: 'ari'
      });
    }).then(function () {
      return knex('users').insert({
        username: 'matt'
      });
    }).then(function () {
      return knex('users').insert({
        username: 'liz'
      });
    }).then(function () {
      return knex('users').insert({
        username: 'laura'
      });
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    });
};

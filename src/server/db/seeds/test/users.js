'use strict';

exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        name: 'Matt Gordon',
        email: 'mattgordon@cobeats.com',
        admin: true
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Ari Clark',
        email: 'ariclark@cobeats.com',
        admin: false
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Chris Grabski',
        email: 'chrisgrabski@cobeats.com',
        admin: false
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Liz Davis',
        email: 'lizdavis@cobeats.com',
        admin: false
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Laura Baukol',
        email: 'laurabaukol@cobeats.com',
        admin: false
      });
    });
};

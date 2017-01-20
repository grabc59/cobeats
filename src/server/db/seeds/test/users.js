'use strict';

exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        name: 'Brett Leads',
        email: 'brettleads@cobeats.com',
        admin: true

      });
    }).then(function () {
      return knex('users').insert({
        name: 'Sarah Leads',
        email: 'sarahleads@cobeats.com',
        admin: false
      });
    });
};

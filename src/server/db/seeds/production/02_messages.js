'use strict';

exports.seed = function(knex, Promise) {
  return knex('messages').del() // Deletes ALL existing entries
    .then(function () {
      return knex('messages').insert({
        id: 1,
        content: 'Firsties',
        user_id: 1
      });
    }).then(function () {
      return knex('messages').insert({
        id: 2,
        content: 'Secondsies',
        user_id: 2
      });
    }).then(function () {
      return knex('messages').insert({
        id: 3,
        content: 'Thirdsies',
        user_id: 3
      });
    }).then(function () {
      return knex('messages').insert({
        id: 4,
        content: 'Fourthsies',
        user_id: 4
      });
    }).then(function () {
      return knex('messages').insert({
        id: 5,
        content: 'Fifthsies',
        user_id: 5,
      });
    }).then(() => {
      return knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages))");
    });
};

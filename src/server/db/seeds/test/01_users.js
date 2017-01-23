'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    username: 'chris',
                }),
                knex('users').insert({
                    username: 'ari',
                }),
                knex('users').insert({
                    username: 'matt',
                }),
                knex('users').insert({
                    username: 'liz',
                }),
                knex('users').insert({
                    username: 'laura',
                }),
                knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
            ]);
        });
};

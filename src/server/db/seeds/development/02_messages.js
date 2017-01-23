exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('messages').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('messages').insert({
                    id: 1,
                    content: 'Firsties',
                    user_id: 1,
                }),
                knex('messages').insert({
                    id: 2,
                    content: 'Secondsies',
                    user_id: 2,
                }),
                knex('messages').insert({
                    id: 3,
                    content: 'Thirdsies',
                    user_id: 3,
                }),
                knex('messages').insert({
                    id: 4,
                    content: 'Fourthsies',
                    user_id: 4,
                }),
                knex('messages').insert({
                    id: 5,
                    content: 'Fifthsies',
                    user_id: 5,
                }),
                knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages))")
            ]);
        });
};

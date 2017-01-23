'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    table.increments().notNullable();
    table.string('content');
    // user id of the message sender
    table.integer('sender').notNullable().references('users.id');
    // created_at, updated_at
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};

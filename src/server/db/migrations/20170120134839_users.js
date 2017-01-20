'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
    table.text('email').notNUllable().unique();
    table.boolean('admin').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

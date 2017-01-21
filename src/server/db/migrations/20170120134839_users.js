'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
    table.text('email').notNullable().unique();
    table.boolean('admin').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};

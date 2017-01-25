'use strict';

const knex = require('./knex');

function messages() {
  return knex('messages');
}

// *** message queries *** //

function getAllMessages() {
  return messages().select();
}

function getAllMessagesWithUsernames() {
  return messages()
    .join('users', 'messages.user_id', '=', 'users.id') 
    .select('messages.content', 'users.username', 'messages.created_at');
}

function getSingleMessage(messageID) {
  return messages().where('id', parseInt(messageID)).first();
}

function addMessage(message) {
  console.log(message);
  return messages().insert(message, 'id');
}

function updateMessage(messageID, updates) {
  return messages().where('id', parseInt(messageID)).update(updates);
}

function deleteMessage(messageID) {
  return messages().where('id', parseInt(messageID)).del();
}

module.exports = {
  getAllMessagesWithUsernames: getAllMessagesWithUsernames,
  getAllMessages: getAllMessages,
  getSingleMessage: getSingleMessage,
  addMessage: addMessage,
  updateMessage: updateMessage,
  deleteMessage: deleteMessage
};

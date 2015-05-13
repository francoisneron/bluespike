/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Dare = require('./dare.model');

exports.register = function(socket) {
  Dare.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Dare.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('dare:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('dare:remove', doc);
}
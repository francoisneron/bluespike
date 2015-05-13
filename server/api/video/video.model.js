'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
  type: String,
  url: String
});

module.exports = mongoose.model('Video', VideoSchema);

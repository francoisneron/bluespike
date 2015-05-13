'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
  dare: String,
  user: String,
  type: String,
  url: String
});

module.exports = mongoose.model('Video', VideoSchema);

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DareSchema = new Schema({
  key: String,
  name: String,
  info: String,
  image: String,
  active: Boolean
});

module.exports = mongoose.model('Dare', DareSchema);

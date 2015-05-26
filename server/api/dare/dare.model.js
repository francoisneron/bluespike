'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DareSchema = new Schema({
  key: String,
  name_en: String,
  name_fr: String,
  info_en: String,
  info_fr: String,
  image: String,
  active: Boolean
});

module.exports = mongoose.model('Dare', DareSchema);

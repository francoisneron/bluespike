'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DareSchema = new Schema({
  key: String,
  name_en: String,
  name_fr: String,
  info_en: String,
  info_fr: String,
  image: { type: String, default: "http://www.defimojoshot.com/assets/images/bdf0d066.Mojo-Shot.png" },
  active: Boolean,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Dare', DareSchema);

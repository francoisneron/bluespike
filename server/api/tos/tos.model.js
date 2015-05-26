'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TosSchema = new Schema({
  text_en: String,
  text_fr: String
});

module.exports = mongoose.model('Tos', TosSchema);

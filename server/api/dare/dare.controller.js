'use strict';

var _ = require('lodash');
var Dare = require('./dare.model');

// Get list of dares
exports.index = function(req, res) {
  Dare.find().sort({date: 'descending'}).exec(function (err, dares) {
    if(err) { return handleError(res, err); }
    return res.json(200, dares);
  });
};

// Get a single dare
exports.show = function(req, res) {
  Dare.find({key: req.params.id}, function (err, dare) {
    if(err) { return handleError(res, err); }
    if(!dare) { return res.send(404); }
    return res.json(dare[0]);
  });
};

// Creates a new dare in the DB.
exports.create = function(req, res) {
  Dare.create(req.body, function(err, dare) {
    if(err) { return handleError(res, err); }
    return res.json(201, dare);
  });
};

// Updates an existing dare in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Dare.findById(req.params.id, function (err, dare) {
    if (err) { return handleError(res, err); }
    if(!dare) { return res.send(404); }
    var updated = _.merge(dare, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, dare);
    });
  });
};

// Deletes a dare from the DB.
exports.destroy = function(req, res) {
  Dare.findById(req.params.id, function (err, dare) {
    if(err) { return handleError(res, err); }
    if(!dare) { return res.send(404); }
    dare.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

'use strict';

var _ = require('lodash');
var Tos = require('./tos.model');

// Get a single tos
exports.show = function(req, res) {
  Tos.find(function (err, toss) {
    if(err) { return handleError(res, err); }
    if(!toss || toss.length < 1) { return res.send(404); }
    return res.json(toss[0]);
  });
};

// Updates an existing tos in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tos.find(function (err, toss) {
    if (err) { return handleError(res, err); }
    if(!toss || toss.length < 1) { return res.send(404); }
    var updated = _.merge(toss[0], req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, updated);
    });
  });
};


function handleError(res, err) {
  return res.send(500, err);
}

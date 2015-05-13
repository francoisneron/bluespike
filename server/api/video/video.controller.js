'use strict';

var _ = require('lodash');
var Video = require('./video.model');

// Get list of videos
exports.index = function(req, res) {
  Video.find(function (err, videos) {
    if(err) { return handleError(res, err); }
    return res.json(200, videos);
  });
};

// Get a single video
exports.show = function(req, res) {
  Video.findById(req.params.id, function (err, video) {
    if(err) { return handleError(res, err); }
    if(!video) { return res.send(404); }
    return res.json(video);
  });
};

// Creates a new video in the DB.
exports.create = function(req, res) {
  Video.create(req.body, function(err, video) {
    if(err) { return handleError(res, err); }
    return res.json(201, video);
  });
};

// Updates an existing video in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Video.findById(req.params.id, function (err, video) {
    if (err) { return handleError(res, err); }
    if(!video) { return res.send(404); }
    var updated = _.merge(video, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, video);
    });
  });
};

// Deletes a video from the DB.
exports.destroy = function(req, res) {
  Video.findById(req.params.id, function (err, video) {
    if(err) { return handleError(res, err); }
    if(!video) { return res.send(404); }
    video.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
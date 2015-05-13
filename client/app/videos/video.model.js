'use strict';

angular.module('dareApp').service('Video', function($resource) {
  return $resource('/api/videos/:id');
});

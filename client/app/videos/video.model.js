'use strict';

angular.module('dareApp').service('Video', function($resource) {
  return $resource('/api/videos/:id', {id: '@_id'}, {
    mine: {
      isArray: true,
      url: '/api/videos/mine'
    }
  });
});

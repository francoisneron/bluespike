'use strict';

angular.module('dareApp').service('Dare', function($resource) {
  return $resource('/api/dares/:id');
});

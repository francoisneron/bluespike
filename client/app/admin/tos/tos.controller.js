'use strict';

angular.module('dareApp').controller('TosAdminCtrl', function($scope, $http) {
  $http.get('/api/toss').then(function(response) {
    $scope.tos = response.data;
  });

  $scope.saveTos = function() {
    $http.post('/api/toss', $scope.tos);
  };
});

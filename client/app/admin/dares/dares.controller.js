'use strict';

angular.module('dareApp')
  .controller('DaresAdminCtrl', function ($scope, $http, Auth, Dare) {

    // Use the User $resource to fetch all items
    $scope.items = Dare.query();

    $scope.delete = function(item) {
      Dare.remove({ id: item._id });
      angular.forEach($scope.items, function(u, i) {
        if (u === item) {
          $scope.items.splice(i, 1);
        }
      });
    };
  });

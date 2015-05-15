'use strict';

angular.module('dareApp')
  .controller('UsersAdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all items
    $scope.items = User.query();

    $scope.delete = function(item) {
      User.remove({ id: item._id });
      angular.forEach($scope.items, function(u, i) {
        if (u === item) {
          $scope.items.splice(i, 1);
        }
      });
    };
  });

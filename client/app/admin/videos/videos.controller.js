'use strict';

angular.module('dareApp')
  .controller('VideosAdminCtrl', function ($scope, $http, Auth, Video) {

    // Use the User $resource to fetch all items
    $scope.items = Video.query();

    $scope.delete = function(item) {
      Video.remove({ id: item._id });
      angular.forEach($scope.items, function(u, i) {
        if (u === item) {
          $scope.items.splice(i, 1);
        }
      });
    };
  });

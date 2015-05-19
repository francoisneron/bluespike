'use strict';

angular.module('dareApp').controller('DaresAdminCtrl', function ($scope, $http, Auth, Dare, $modal) {

  $scope.items = Dare.query();

  $scope.delete = function(item) {
    Dare.remove({ id: item._id });
    angular.forEach($scope.items, function(u, i) {
      if (u === item) {
        $scope.items.splice(i, 1);
      }
    });
  };

  $scope.create = function() {
    var modal = $modal.open({
      templateUrl: 'app/admin/editModal.html',
      controller: function($scope) {
        $scope.item = {};
        $scope.fields = ["key", "name", "info", "active", "image"];
      }
    });
    modal.result.then(function(item) {
      item = new Dare(item);
      item.$save();
      $scope.items.push(item);
    });
  };
});

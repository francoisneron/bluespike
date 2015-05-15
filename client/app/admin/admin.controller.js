'use strict';

angular.module('dareApp').controller('AdminCtrl', function ($scope, $http, $modal) {
  $scope.edit = function(item) {
    console.log(Object.keys(item));
    var modal = $modal.open({
      templateUrl: 'app/admin/editModal.html',
      controller: function($scope, fields, item) {
        $scope.fields = fields;
        $scope.item = item;
      },
      resolve: {
        fields: function() {return Object.keys(item);},
        item: function() {return item;}
      }
    });
    modal.result.then(function(item) {
      if(item.$save && typeof item.$save === 'function') {
        item.$save();
      }
    });
  };
});

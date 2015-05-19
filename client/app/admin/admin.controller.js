'use strict';

angular.module('dareApp').controller('AdminCtrl', function ($scope, $http, $modal) {
  var filterKeys = function(item) {
    return Object.keys(item).filter(function(key) {
      return key !== '__v' && key !== '_id' && key !== '$$hashKey';
    });
  };
  $scope.edit = function(item) {
    var modal = $modal.open({
      templateUrl: 'app/admin/editModal.html',
      controller: function($scope, fields, item) {
        $scope.fields = fields;
        console.log(fields);
        $scope.item = item;
      },
      resolve: {
        fields: function() {return filterKeys(item);},
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

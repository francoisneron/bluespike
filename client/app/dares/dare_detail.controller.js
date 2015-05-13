'use strict';

angular.module('dareApp').controller('DareDetailCtrl', function ($scope, $stateParams, Dare) {
  $scope.dare = Dare.get({id: $stateParams.id});
});

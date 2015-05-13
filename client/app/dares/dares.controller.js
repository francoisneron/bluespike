'use strict';

angular.module('dareApp').controller('DaresCtrl', function ($scope, Dare) {
  $scope.dares = Dare.query();


});

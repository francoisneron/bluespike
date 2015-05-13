'use strict';

angular.module('dareApp').controller('DareDetailCtrl', function ($scope, $stateParams, Dare, Video) {
  $scope.dare = Dare.get({id: $stateParams.key});
  $scope.videos = Video.query({dare: $stateParams.key});
});

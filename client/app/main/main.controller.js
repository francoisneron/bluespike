'use strict';

angular.module('dareApp').controller('MainCtrl', function ($scope, $http, Video) {
  $scope.videos = Video.query();
});

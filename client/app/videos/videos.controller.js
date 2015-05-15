'use strict';

angular.module('dareApp').controller('VideoCtrl', function ($scope, $http, Video) {
  $scope.videos = Video.query();
});

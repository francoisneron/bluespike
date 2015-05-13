'use strict';

angular.module('dareApp').controller('MainCtrl', function ($scope, $http, socket, Video) {
  $scope.videos = Video.query();
});

'use strict';

angular.module('dareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videos', {
        url: '/videos',
        templateUrl: 'app/videos/videos.html',
        controller: 'VideoCtrl',
        authenticate: true
      });
  });

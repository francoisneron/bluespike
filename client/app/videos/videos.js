'use strict';

angular.module('dareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videos', {
        url: '/',
        templateUrl: 'app/videos/videos.html',
        controller: 'VideoCtrl'
      });
  });

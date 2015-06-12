'use strict';

angular.module('dareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dares', {
        url: '/dares',
        templateUrl: 'app/dares/dares.html',
        controller: 'DaresCtrl',
        authenticate: false
      })
      .state('dare_detail', {
        url: '/dares/:key',
        templateUrl: 'app/dares/dare_detail.html',
        controller: 'DareDetailCtrl',
        authenticate: false
      });
  });

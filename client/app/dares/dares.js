'use strict';

angular.module('dareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dares', {
        url: '/dares',
        templateUrl: 'app/dares/dares.html',
        controller: 'DaresCtrl'
      })
      .state('dare_detail', {
        url: '/dares/:id',
        templateUrl: 'app/dares/dare_detail.html',
        controller: 'DareDetailCtrl'
      });
  });

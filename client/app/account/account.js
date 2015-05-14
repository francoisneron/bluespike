'use strict';

angular.module('dareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('my_dares', {
        url: '/my_dares?new_dare',
        templateUrl: 'app/account/my_dares/my_dares.html',
        controller: 'myDaresCtrl',
        authenticate: true
      });
  });

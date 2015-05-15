'use strict';

angular.module('dareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })
      .state('admin.users', {
        url: '/users',
        templateUrl: 'app/admin/users/users.html',
        controller: 'UsersAdminCtrl'
      })
      .state('admin.dares', {
        url: '/dares',
        templateUrl: 'app/admin/dares/dares.html',
        controller: 'DaresAdminCtrl'
      })
      .state('admin.videos', {
        url: '/videos',
        templateUrl: 'app/admin/videos/videos.html',
        controller: 'VideosAdminCtrl'
      });
  });

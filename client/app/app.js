'use strict';

angular.module('dareApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'facebook'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $sceDelegateProvider, $facebookProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://www.youtube.com/embed/*',
    'https://player.vimeo.com/video/*'
  ]);
  $facebookProvider.init({
    appId: '420157531503239',
    version: 'v2.3'
  });
}).factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  return {
    // Add authorization token to headers
    request: function (config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      if(response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  };
}).run(function ($rootScope, $location, $state, Auth, $cookieStore, $window) {
  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$stateChangeStart', function (event, nextState, nextParams) {
    Auth.isLoggedInAsync(function(loggedIn) {
      if (nextState.authenticate && !loggedIn) {
        // store the requested url if not logged in
        if ($location.url() != '/login')
        {
          $cookieStore.put('returnUrl', $state.href(nextState.name, nextParams));
        }
        $location.path('/login');
      }
    });
  });

});

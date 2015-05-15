'use strict';

angular.module('dareApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'facebook'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $sceDelegateProvider, $facebookProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'https://www.youtube.com/embed/*',
      'https://player.vimeo.com/video/*',
      'https://www.facebook.com/video/embed?video_id=*'
    ]);
    $facebookProvider.init({
      appId: FACEBOOK_ID,
      version: 'v2.3'
    });
    $translateProvider.translations('en', {
      'DARE_SITE_TITLE': 'DARE SITE TITLE',
      'SWITCH_LANGUAGE': 'FR',
      'OTHER_LANG_KEY': 'fr',
    });
    $translateProvider.translations('fr', {
      'DARE_SITE_TITLE': 'TITRE DU SITE DARE',
      'SWITCH_LANGUAGE': 'EN',
      'OTHER_LANG_KEY': 'en',
    });
    $translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
      'en_US': 'en',
      'en_UK': 'en',
      'en_CA': 'en',
      'fr_CA': 'fr',
      'fr_FR': 'fr'
    });
    $translateProvider.determinePreferredLanguage();
    $translateProvider.useSanitizeValueStrategy('escaped');
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
  if ($window.opener && $cookieStore.get('token')) {
    $window.token = $cookieStore.get('token');
  }

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

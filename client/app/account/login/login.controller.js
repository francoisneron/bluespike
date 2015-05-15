'use strict';

angular.module('dareApp')
  .controller('LoginCtrl', function ($scope, $stateParams, Auth, $location, $window, $interval, $cookieStore) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to previous URL or home
          if (typeof $cookieStore.get('returnUrl') != 'undefined' && $cookieStore.get('returnUrl') != '') {
            $location.path($cookieStore.get('returnUrl'));
            $cookieStore.remove('returnUrl');
          } else {
            $location.path('/');
          }
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.loginOauthModal = function(provider) {
      var popup = $window.open('/auth/' + provider, 'Login', 'height=467,width=600');
      var interval = 500;
      var i = $interval(function(){
        interval += 500;
        try {
          if (popup.token){
            $interval.cancel(i);
            popup.close();
            Auth.refreshUser().then($scope.$close, $scope.$dismiss);
          }
        } catch(e){
          // Errors are normal at this stage; we're trying to access a cross-origin window until it is not cross-origin anymore.
        }
      }, interval);
    }
  });

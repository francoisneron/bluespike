'use strict';

angular.module('dareApp').controller('NavbarCtrl', function ($scope, $location, Auth, $translate, $filter) {
  $scope.isCollapsed = true;
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.logout = function() {
    Auth.logout();
    $location.path('/login');
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };

  $scope.switchLanguage = function() {
    $translate.use($filter('translate')('OTHER_LANG_KEY'));
  };

});

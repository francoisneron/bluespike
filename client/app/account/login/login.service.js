angular.module('dareApp').service('LoginService', function(Auth, $modal, $q, $state) {
  var LoginService = {};
  LoginService.ensureLoggedIn = function() {
    var deferred = $q.defer();
    if(Auth.isLoggedIn()) {
      deferred.resolve(Auth.getCurrentUser());
    } else {
      $state.go('login');
    }
    return deferred.promise;
  };
  return LoginService;
});

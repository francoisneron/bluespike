angular.module('dareApp').service('LoginService', function(Auth, $modal, $q) {
  LoginService = {};
  LoginService.ensureLoggedIn = function() {
    var deferred = $q.defer();
    if(Auth.isLoggedIn()) {
      deferred.resolve(Auth.getCurrentUser());
    } else {
      var modal = $modal.open({
        templateUrl: 'app/account/login/loginModal.html',
        controller: 'LoginCtrl'
      });
      modal.result.then(deferred.resolve, deferred.reject);
    }
    return deferred.promise;
  };
  return LoginService;
});

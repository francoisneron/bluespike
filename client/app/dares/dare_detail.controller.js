'use strict';

angular.module('dareApp').controller('DareDetailCtrl', function ($scope, $stateParams, $state, Dare, Video, LoginService) {
  $scope.dare = Dare.get({id: $stateParams.key});
  $scope.videos = Video.query({dare: $stateParams.key});
  $scope.do_dare = function(dare) {
    LoginService.ensureLoggedIn().then(function(currentUser) {
      var video = new Video({dare: dare.key, user: currentUser.email});
      return video.$save();
    }).then(function() {
      $state.go('my_dares');
    });

  }
});

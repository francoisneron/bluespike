'use strict';

angular.module('dareApp').controller('DareDetailCtrl', function ($scope, $stateParams, $state, Dare, Video, LoginService, $facebook, $location) {
  $scope.dare = Dare.get({id: $stateParams.key});
  $scope.videos = Video.query({dare: $stateParams.key});
  $scope.send_dare = function(dare) {
    $facebook.ui({
      method: 'share_open_graph',
      action_type: FACEBOOK_NAMESPACE + ':send',
      action_properties: JSON.stringify({
          challenge:{
            'og:url': $location.absUrl(),
            'og:title': dare.name,
            'og:type': FACEBOOK_NAMESPACE + ':challenge',
            'og:image': dare.image,
            'og:description': dare.info,
            'fb:app_id': FACEBOOK_ID
          }
      })
    }, function(response){
      // nothing to do here, mobe along
    });
  };
  $scope.do_dare = function(dare) {
    LoginService.ensureLoggedIn().then(function(currentUser) {
      var video = new Video({dare: dare.key, user: currentUser.email});
      return video.$save();
    }).then(function() {
      $state.go('my_videos');
    });
  };
});

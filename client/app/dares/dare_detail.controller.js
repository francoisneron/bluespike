'use strict';

angular.module('dareApp').controller('DareDetailCtrl', function ($scope, $stateParams, $filter, $state, Dare, Video, LoginService, $facebook, $location, $translate) {
  $scope.dare = Dare.get({id: $stateParams.key});
  $scope.myvideos = Video.mine();
  $scope.videos = Video.query({dare: $stateParams.key});
  $scope.send_dare = function(dare) {
    $facebook.ui({
      method: 'share_open_graph',
      action_type: FACEBOOK_NAMESPACE + ':send',
      action_properties: JSON.stringify({
          challenge:{
            'og:url': $location.absUrl(),
            'og:title': dare['name_'+$translate.use()],
            'og:type': FACEBOOK_NAMESPACE + ':challenge',
            'og:image': dare.image,
            'og:description': dare['info_'+$translate.use()],
            'fb:app_id': FACEBOOK_ID
          }
      })
    }, function(response){
      // nothing to do here, mobe along
    });
  };
  
  $scope.do_dare = function(dare) {
    LoginService.ensureLoggedIn().then(function(currentUser) {
      var found = $filter('filter')($scope.myvideos, {dare: dare.key, user: currentUser.email, name: currentUser.name}, true);
      if(found.length == 0) {
        var video = new Video({dare: dare.key, user: currentUser.email, name: currentUser.name});
        return video.$save();
      }
    }).then(function() {
      $state.go('my_videos');
    });
  };
});

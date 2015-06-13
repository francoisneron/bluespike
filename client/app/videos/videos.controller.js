'use strict';

angular.module('dareApp').controller('VideoCtrl', function ($scope, $http, Video) {
  $scope.videos = Video.query();

  $scope.share_facebook = function(dare) {
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

  $scope.share_twitter = function(dare) {
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
});

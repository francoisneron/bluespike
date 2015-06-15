'use strict';

angular.module('dareApp').controller('VideoCtrl', function ($scope, $http, $facebook, $location, $translate, Video) {
  $scope.videos = Video.query();

  $scope.share_facebook = function(video) {
    $facebook.ui({
      method: 'share_open_graph',
      action_type: FACEBOOK_NAMESPACE + ':send',
      action_properties: JSON.stringify({
          video:{
            'og:url': $location.absUrl(),
            'og:title': video['dare_'+$translate.use()],
            'og:type': FACEBOOK_NAMESPACE + ':video',
            'og:video': video.url,
            'og:description': video['name_'+$translate.use()],
            'fb:app_id': FACEBOOK_ID
          }
      })
    }, function(response){
      // nothing to do here, mobe along
    });
  };
});

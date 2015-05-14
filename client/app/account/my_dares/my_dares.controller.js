'use strict';

angular.module('dareApp').controller('myDaresCtrl', function($scope, $stateParams, Auth, Dare, Video, $facebook) {
  if ($stateParams.new_dare) {
    $scope.new_video = new Video({dare: $stateParams.new_dare, user: Auth.getCurrentUser().email});
    $scope.new_dare = Dare.get({id: $scope.new_video.dare});
  }
  $scope.videos = Video.query({user: Auth.getCurrentUser().email});

  $scope.user = Auth.getCurrentUser();

  $scope.authResponse = $facebook.getAuthResponse();

  $facebook.login({scope: 'user_videos'}).then(function(authResponse) {
    $scope.authResponse = authResponse;
    $facebook.api("/:user_id/videos".replace(":user_id", Auth.getCurrentUser().facebook.id)).then(function(videos) {
      $scope.fbVideos = videos;
    });
  });


  function getEmbedUrl(pastedData) {
    var result;
    var video_id = "";
    if (pastedData.match('https?://(www.)?youtube|youtu\.be')) {
        if (pastedData.match('embed')) { video_id = pastedData.split(/embed\//)[1].split('"')[0]; }
        else { video_id = pastedData.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]; }
        result = "https://www.youtube.com/embed/:id".replace(":id", video_id);
    }
    else if (pastedData.match('https?://(player.)?vimeo\.com')) {
        video_id = pastedData.split(/video\/|https?:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
        result = "https://player.vimeo.com/video/:id".replace(":id", video_id);
    }
    return result;
  }


  $scope.save_url = function(video) {
    var youtube_url = /https:\/\/www.youtube.com\/watch?v=X9Ey4ovBODM/
    if (video.unvalidated_url) {
      video.url = getEmbedUrl(video.unvalidated_url);
      delete video.unvalidated_url;
    }
    video.$save();
  }
});

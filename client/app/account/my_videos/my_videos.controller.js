'use strict';

angular.module('dareApp').controller('myVideosCtrl', function($scope, $stateParams, Auth, Dare, Video, $facebook, $modal) {
  $scope.dares = {};
  $scope.videos = Video.query({user: Auth.getCurrentUser().email})
  $scope.videos.$promise.then(function(videos) {
    videos.forEach(function(video) {
      $scope.dares[video.dare] = Dare.get({id: video.dare});
    });
  });

  $scope.user = Auth.getCurrentUser();



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
  };


  $scope.save_url = function(video) {
    var youtube_url = /https:\/\/www.youtube.com\/watch?v=X9Ey4ovBODM/
    if (video.unvalidated_url) {
      video.url = getEmbedUrl(video.unvalidated_url);
      delete video.unvalidated_url;
    }
    video.$save();
  };

  $scope.fromFb = function(video) {
    var fbVideosPromise = $facebook.login({scope: 'user_videos'}).then(function(authResponse) {
      return $facebook.api("/me/videos");
    }).then(function(videos) {
      var modal = $modal.open({
        templateUrl: 'app/account/my_videos/fbVideoModal.html',
        controller: function($scope, fbVideos) {
          $scope.fbVideos = fbVideos;
        },
        resolve: {
          fbVideos: function() {return videos.data;}
        }
      });
      return modal.result
    }).then(function(videoId) {
      video.url = "https://www.facebook.com/video/embed?video_id=:id".replace(":id", videoId);
      return video.$save();
    });
  };
});


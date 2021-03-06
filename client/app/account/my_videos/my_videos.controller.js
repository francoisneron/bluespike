'use strict';

angular.module('dareApp').controller('myVideosCtrl', function($scope, $stateParams, Auth, Dare, Video, $facebook, $modal, $http) {
  $scope.dares = {};
  $scope.videos = Video.mine();
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

  $scope.delete = function(video) {
    Video.remove({ id: video._id });
    angular.forEach($scope.videos, function(u, i) {
      if (u === video) {
        $scope.videos.splice(i, 1);
      }
    });
  };

  $scope.showTos = function() {
    return $http.get('/api/toss').then(function(response) {
      return response.data;
    }).then(function(tos) {
      var modal = $modal.open({
        templateUrl: 'app/account/my_videos/conditionModal.html',
        controller: function($scope, tos) {
          $scope.tos = tos;
        },
        resolve: {
          tos: function() { return tos; }
        }
      });
      return modal.result;
    });
  };

  $scope.save_url = function(video) {
    $scope.showTos().then(function() {
      var youtube_url = /https:\/\/www.youtube.com\/watch?v=X9Ey4ovBODM/
      if (video.unvalidated_url) {
        video.url = getEmbedUrl(video.unvalidated_url);
        delete video.unvalidated_url;
      }
      video.$save();
    });
  };

  $scope.fromFb = function(video) {
    $scope.showTos().then(function() {
      return $facebook.login({scope: 'user_videos'})
    })
    .then(function(authResponse) {
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


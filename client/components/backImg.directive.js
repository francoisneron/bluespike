angular.module('dareApp').directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
          if(value && value !== '') {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover',
                'background-position': 'center'
            });
          }
        });
    };
});

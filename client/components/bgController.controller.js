angular.module('dareApp').controller('bgController', function($interval) {

    // set the view model as this scope
    var vm = this
    
    var slides = [
       'url("assets/images/Low-rez/Mojo-Plateau-0515-26_lowres.jpg")' ,
       'url("assets/images/Low-rez/Mojo-Plateau-0515-32_lowres.jpg")' ,
       'url("assets/images/Low-rez/Mojo-Plateau-0515-45_lowres.jpg")' ,
       'url("assets/images/Low-rez/Mojo-Plateau-0515-49_lowres.jpg")'
    ];
    
    vm.slide = slides[0];

    $interval(function(){
      if(vm.slide == slides[0])
          vm.slide = slides[1];
      else if(vm.slide == slides[1])
          vm.slide = slides[2];
      else if(vm.slide == slides[2])
          vm.slide = slides[3];
      else
          vm.slide = slides[0];
    }, 10000, 0);
    

})

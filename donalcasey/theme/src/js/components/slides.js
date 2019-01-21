exports.init = function($) {
  "use strict";
  //plugin code TODO: make it not plugin code :|



  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      autoPlay: 3000,
      nav: false,
      dots: true,
      loop: true,
      items: 1,
      center: false,
      smartSpeed: 1000,
      navText: ["<i class='arrow left'>", "<i class='arrow right'>"],
      responsive: {
        1100: {
          nav: true,
          dots: false,
          loop: true,
          items: 2,
          center: true
        }
      }
    });
    //col slider
    $(".owl-carousel-column").owlCarousel({
      autoPlay: 3000,
      nav: false,
      dots: true,
      loop: true,
      items: 1,
      center: false,
      smartSpeed: 1000,
      navText: ["<i class='arrow left'>", "<i class='arrow right'>"],
      responsive: {
        1100: {
          nav: true,
          dots: false,
          loop: true,
          items: 1,
          center: true
        }
      }
    });
    // $('.fifty-fifty-item').on('click', function(){
    //   $(".owl-carousel-column").owlCarousel('destroy');
    //   $(".owl-carousel-column, .owl-carousel-column *").off();
    //   $(".owl-carousel-column").owlCarousel({
    //     autoPlay: 3000,
    //     nav: true,
    //     dots: true,
    //     loop: true,
    //     rewind:false,
    //     items: 1,
    //     center: true,
    //     smartSpeed: 1000,
    //     navText: ["<i class='arrow left'>", "<i class='arrow right'>"],
    //     responsiveClass: true,
    //     slideBy: 2
        
    //   });
    // });
  });

};

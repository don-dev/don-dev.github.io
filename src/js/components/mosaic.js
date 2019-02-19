exports.init = function($) {
  "use strict";

  $(document).ready(function() {
    var mobileMosaicConditionalWrapper = function(){
      var windowSize = $(window).width();
      if (windowSize < 1070) {
        $('.mosaic .left-col div, .mosaic .right-col div').unwrap();
        console.log('here');
        $('.mosaic > div').wrapAll('<div class="left-col right-col"></div>');
      }else{
        if ($('.mosaic .left-col.right-col').length) {
          $('.mosaic .left-col.right-col div').unwrap();
          $('.mosaic div:nth-child(-n+3)').wrapAll('<div class="left-col"></div>');
          $('.mosaic > div:nth-child(n+2)').wrapAll('<div class="right-col"></div>');
        }
      }
    };
    mobileMosaicConditionalWrapper();
    $(window).on('resize', function(){
      mobileMosaicConditionalWrapper();
    });
  });
};

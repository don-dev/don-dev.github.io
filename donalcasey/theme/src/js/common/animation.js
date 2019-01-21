exports.init = function($) {
  $(document).ready(function() {
    var animationJS = {
      debug: false,
      init: function() {
        if (this.debug) {
          console.log("animationJS.init()");
        }

        /* Check the location of each desired element */
        $(".hideme").each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window >= bottom_of_object) {
            // $(this).animate({ opacity: "1" }, 500);
          }
        });

        $(".fade-left").each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window >= bottom_of_object) {
            // $(this).animate({ opacity: "1" }, 500);
            $(this).addClass("show");
          }
        });

        $(".fade-up").each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window >= bottom_of_object) {
            // $(this).animate({ opacity: "1" }, 500);
            $(this).addClass("show");
          }
        });

        $(".cut-up").each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window >= bottom_of_object) {
            $(this).addClass("animate");
          }
        });

        $(".cut-left").each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window >= bottom_of_object) {
            $(this).addClass("animate");
          }
        });

        $(".path").each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window >= bottom_of_object) {
            // $(this).animate({ opacity: "1" }, 500);
            $(this).addClass("path-animate");
            $(this).addClass("show");
          }
        });

        $(".fade-right").each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window >= bottom_of_object) {
            // $(this).animate({ opacity: "1" }, 500);
            $(this).addClass("show");
          }
        });
      }
    };
    animationJS.init();
  });
};

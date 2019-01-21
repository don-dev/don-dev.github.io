exports.init = function ($) {
  var DC = {
    debug: true,
    tallest: 0,
    init: function () {
      if (this.debug) {
        let reasons = ["You like how I did something and want to use it as an example:", "Go ahead! I am flattered. Also, this site was created in haste, I have my own yo generator and structure I take with me from site to site, but it was used to modify a theme found on the web.",, "You are vetting me", "That\'s cool too! It\'s the main reason I left debug\: true on line 3!. I take pride in how I organize my assets. Use these debugs to light the way!"];
        console.log('Hey curious individual! Chances are, you would like to look at this structure and see how I work for good reasons!', reasons);
        console.log('DC.init()');
      }
      try {
        $.ajaxSetup({
          cache: false
        }); //to remove?

        DC.Bindings();
        //bind custom scroll fade-in

        $('body').addClass('loaded');
      } catch (err) {
        if (this.debug) {
          console.log(err);
        }
        $('body').addClass('loaded');
      }
    },
    Bindings: function () {
      if (this.debug) {
        console.log('DC.Bindings()');
      }

      //fade in viewport after scroll or resize
      $(window).on('scroll resize', function () {
        DC.ScrollFade();
      });

      // Select all links with hashes
      $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 20
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
    },
    Common: {
      equalHeights: function (ele) {
        if (DC.debug) {
          console.log('DC.Common.equalHeights();');
        }
        $.each(ele, function (index, val) {
          if ($(this).height() > DC.tallest) DC.tallest = $(this).height();
        });

        ele.height(DC.tallest);
      }
    },
    ScrollFade: function () {
      if (this.debug) {
        console.log('DC.ScrollFade()');
      }

      /* Check the location of each desired element */
      $('.hideme').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window >= bottom_of_object) {
          $(this).addClass('show');
        }
      });

      $('.fade-left').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window >= bottom_of_object) {

          $(this).addClass('show');
        }
      });

      $('.fade-up').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window >= bottom_of_object) {

          $(this).addClass('show');
        }
      });

      $('.path').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window >= bottom_of_object) {

          $(this).addClass('path-animate');
          $(this).addClass('show');
        }
      });

      $('.fade-right').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window >= bottom_of_object) {

          $(this).addClass('show');
        }
      });
    }
  };

  //are we good?
  if ($('body').length) {
    DC.init();
  }
};
//# sourceMappingURL=globals.js.map

/* modules */
const $ = jQuery;
var globals = require("./common/globals.js");
var animation = require("./common/animation.js");

module.exports = (function() {
  $(function($) {
    var utils = {
      debug: true,
      tallest: 0,
      equalHeights: function(ele) {
        if (this.debug) {
          console.log("CP.utils.equalHeights();");
        }
        utils.tallest = 0;
        $.each(ele, function(index, val) {
          if ($(this).outerHeight() > utils.tallest)
            utils.tallest = $(this).outerHeight();
          $(this).outerHeight(utils.tallest);
        });

        ele.outerHeight(utils.tallest);
      },
      scrollTo: function(target) {
        if (this.debug) {
          console.log("CP.utils.ScrollTo");
        }
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target).offset().top
            },
            1500,
            "easeInOutExpo"
          );
      },
      ajaxStart: function(container) {
        if (this.debug) {
          console.log("CP.utils.ajaxStart(" + container + ")");
        }
        //let spinner = svgSpinnerOBJ;
        $.ajaxStart(function(container) {
          // animation();
          container.css("opacity", "0.5");
          spinner.show("fast");
        });
        $.ajaxStop(function(container) {
          // animation();
          container.css("opacity", "1");
          spinner.hide("fast");
        });
      },
      imagesLoaded: function() {
        if (this.debug) {
          console.log("CP.utils.imagesLoaded");
        }
        // Fn to allow an event to fire after all images are loaded

        // get all the images (excluding those with no src attribute)
        var $imgs = $(document).find('img[src!=""]');
        // if there's no images, just return an already resolved promise
        if (!$imgs.length) {
          return $.Deferred()
            .resolve()
            .promise();
        }

        // for each image, add a deferred object to the array which resolves when the image is loaded (or if loading fails)
        var dfds = [];
        $imgs.each(function() {
          var dfd = $.Deferred();
          dfds.push(dfd);
          var img = new Image();
          img.onload = function() {
            dfd.resolve();
          };
          img.onerror = function() {
            dfd.resolve();
          };
          img.src = this.src;
        });

        // return a master promise object which will resolve when all the deferred objects have resolved
        // IE - when all the images are loaded
        return $.when.apply($, dfds);
      },
      getItem: function(ID) {
        //Leaving for example, for service data
        if (this.debug) {
          console.log("CP.utils.getPromoByID(" + ID + ")");
        }
        var self = this;
        var promo;

        //abstract method of selecting a promo by ID
        $.getJSON(dataPathPromos, function(json, textStatus) {
          promo = json.promos[ID];
        });
        return promo;
      },
      isNear: function($ele, distance, event) {
        // for chat share print module
        if (this.debug) {
          //console.log('CP.utils.isNear('+ $ele +' '+ distance +' '+ event +')');
        }

        var left = $ele.offset().left - distance,
          top = $ele.offset().top - distance,
          right = left + $ele.width() + 2 * distance,
          bottom = top + $ele.height() + 2 * distance,
          x = event.pageX,
          y = event.pageY;

        return x > left && x < right && y > top && y < bottom;
      },
      validation: {
        debug: true,
        isNotBlank: function(val) {
          if (this.debug) {
            console.log("CP.utils.isNotBlank(" + val + ")");
          }
          if (val.length) {
            return true;
          } else {
            return false;
          }
        },
        isMinCharacters: function() {
          if (this.debug) {
            console.log("CP.utils.isMinCharacters()");
          }
        }
      },
      getQueryString: function(name, url) {
        if (this.debug) {
          console.log("CP.utils()");
        }

        if (!url) {
          url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";

        return decodeURIComponent(results[2].replace(/\+/g, " "));
      }
    };
    // end utils
    //are we good?
    if ($("body").length) {
      globals.init($);
      $(window).on("load", function() {

      });

      //TODO: ADD LOGIC HERE
    }
    
    animation.init($);

  });
})();


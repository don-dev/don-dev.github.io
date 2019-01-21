exports.init = function ($) {
  $(document).ready(function () {
    var customerSearch = {
      debug: false,
      DebounceCall: function (func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var dateNow = Date.now || function () {
          return new Date().getTime();
        };

        var later = function () {
          var last = dateNow() - timestamp;

          if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            }
          }
        };

        return function () {
          context = this;
          args = arguments;
          timestamp = dateNow();
          var callNow = immediate && !timeout;
          if (!timeout) timeout = setTimeout(later, wait);
          if (callNow) {
            result = func.apply(context, args);
            context = args = null;
          }

          return result;
        };
      },
      GetResultCount: function () {
        var currentCount = $(".customer-grid-container .customer-grid-item").filter(function () {
          return $(this).css("display") == "block";
        }).length;
        return "Showing " + currentCount + " Results";
      },
      FilterList: function () {
        var triggeredCount = false;
        var currentTime = null;
        var selectTerm;
        var searchTerm;
        var timeOut;

        var updateGrid = function (val) {
          if (val) {
            $(".customer-list").find(".customer-name:not(:contains(" + val + "))").parent().slideUp();
            $(".customer-list").find(".customer-name:contains(" + val + ")").parent().slideDown(function () {
              var stringValue = customerSearch.GetResultCount();
              $(".total-result").html(stringValue);
            });
          } else {
            $(".customer-list").find(".customer-grid-item").slideDown(function () {
              var stringValue = customerSearch.GetResultCount();
              $(".total-result").html(stringValue);
            });
          }
        };

        $(".filterinput").keyup(function (e) {
          searchTerm = $(".filterinput").val().toLowerCase();

          clearTimeout(timeOut);

          timeOut = setTimeout(function () {
            var stringValue = customerSearch.GetResultCount();
            $(".total-result").html(stringValue);
            customerSearch.DebounceCall(updateGrid(searchTerm), 250);
          }, 300);
        });

        $("#filter-category").change(function () {
          selectTerm = $(this).find(":selected").val().toLowerCase();
          if (selectTerm === "all") {
            $(".customer-list").find(".customer-grid-item").slideDown(function () {
              var stringValue = customerSearch.GetResultCount();
              $(".total-result").html(stringValue);
            });
          } else {
            updateGrid(selectTerm);
          }
        });
      },
      BindEvents: function () {
        $(".customer-grid-container .customer-grid-item").each(function () {
          if ($(this).find("#card-copy").text() != "") {
            // $(this).hover(
            //   function() {
            //     $(this)
            //       .find(".text-container")
            //       .css("display", "block")
            //       .addClass("animated fadeInDown text-box-shadow");
            //     $(this)
            //       .find(".image-container")
            //       .addClass("image-box-shadow");
            //   },
            //   function() {
            //     $(this)
            //       .find(".text-container")
            //       .css("display", "none")
            //       .removeClass("animated fadeInDown text-box-shadow");
            //     $(this)
            //       .find(".image-container")
            //       .removeClass("image-box-shadow");
            //   }
            // );
          }
        });

        $(".mobile-grid-container .customer-grid-item").each(function () {
          $(this).on("click", function () {
            $(this).find(".text-container").toggle();
            $(this).find(".customer-name").toggleClass("open");
          });
        });
      },
      init: function () {
        if (this.debug) {
          console.log("customerSearch.init()");
        }

        var currentCount;
        var stringValue = customerSearch.GetResultCount();

        $("body").css("background-color", "#f7f8fa");
        $(".single-cta-container, .resource-container").css("background-color", "white");

        customerSearch.BindEvents();
        customerSearch.FilterList();

        $(".total-result").html(stringValue);
      }
    };
    customerSearch.init();
  });
};
//# sourceMappingURL=customer.js.map

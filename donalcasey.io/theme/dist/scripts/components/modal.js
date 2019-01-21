exports.init = function ($) {
  'use strict';
  //plugin code TODO: make it not plugin code :|

  $(function () {
    $('#modal-1, #modal-2').on('change', function () {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    });

    var currentUrl = $('.video-container iframe').attr('data-src');

    $('.modal-fade-screen, .modal-close').on('click', function () {
      $('.modal-state:checked').prop('checked', false).change();
      $('iframe').attr('src', '');
    });

    $('.modal-trigger > svg').on('click', function () {
      $('iframe').attr('src', currentUrl);
    });

    $('.modal-inner').on('click', function (e) {
      e.stopPropagation();
    });
  });
};
//# sourceMappingURL=modal.js.map

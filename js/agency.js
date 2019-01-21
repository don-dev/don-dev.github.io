/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// $('.portfolio-link').on('click', function(event) {
//   event.preventDefault();
//   var IDmodal = $(this).attr('attribute', 'href');
//   $(IDmodal).modal('show');
// });

$(document).ready(function($) {
		window.onerror = function() {
		console.log('Error caught');
		$('body').addClass('loaded');
	};

  // PAGE FADE IN
  setTimeout(function(){
		$('body').addClass('loaded');
  },300);

});

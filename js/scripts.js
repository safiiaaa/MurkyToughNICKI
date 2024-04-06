/*
These functions make sure WordPress
and Foundation play nice together.
*/

var $win = jQuery(window),
  $body = jQuery("body");
$ = jQuery;

$(".menu-social__link").attr("target", "_blank");

$(".ae-cform-item-email input").attr("placeholder", "E-mail*");

$(".menu-cta").on("click", function () {
  $("#main-header").toggleClass("expand");
});

$('tr[class*="umg_live_"]').each(function (event) {
  $(this).children().slice(3).wrapAll('<td class="umg_live_tickets_wrapper"/>');
  // $(this).children().slice(0,3).wrapAll('<td class="umg_live_info_wrapper"/>');
});

if ($body.hasClass("home")) {
  var $postSlider = $(".js-slider"),
    $videoSlider = $(".js-videos"),
    $mobileOnlySlider = $(".js-slider-mobile"),
    albumDay = new Date();

	albumDay = new Date(2023, 12-1, 8);
	$('#countdown').countdown({
    until: albumDay, 
    timezone: -5,
    format: 'dHMS'
  });

  $postSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  });

  $videoSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  });

  $mobileOnlySlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });

  // $('#nextShow').countdown('2023/12/25 00:00:00', function(event) {
  // 	$(this).html(
  // 		event.strftime(
  // 			'<div class="box"><span class="digit">%D</span> <span class="label">Days</span></div>'
  // 			+ '<div class="box"><span class="digit">%H</span> <span class="label">Hours</span></div>'
  // 			+ '<div class="box"><span class="digit">%M</span> <span class="label">Minutes</span></div>'
  // 			+ '<div class="box"><span class="digit">%S</span> <span class="label">Seconds</span></div>'
  // 		)
  // 	);
  // });
  //
}

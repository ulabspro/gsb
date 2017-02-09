$(document).ready(function () {
	$('.main-slider-header').slick({
		speed: 1300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		dots: false,
		arrow: false
	});

	$('.menu__mobile-icon').click(function () {
		$(this).hide().next().show();
		$('.menu__mobile-close').show().click(function () {
			$(this).parent().hide();
			$('.menu__mobile-icon').show();
		});
	});
});

$(document).ready(function () {
	$('.main-slider-bottom-slide').slick({
		speed: 1300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		fade: true,
		dots: false,
		arrow: false
	});

	$('.carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		infinite: true,

		responsive: [{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}]
	});
});

$(document).ready(function () {
	$('.main-slider-center-slide').slick({
		speed: 1300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		dots: false,
		arrows: false
	});
});

;(function ($) {
	$('.swipebox').swipebox({
		useSVG: false
	});
})(jQuery);
$(document).ready(function () {
	$('.slider-main').slick({
		speed: 1300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		fade: true,
		dots: false,
		arrows: false
	});
});
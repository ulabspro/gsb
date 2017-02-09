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

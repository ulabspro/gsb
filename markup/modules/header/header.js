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

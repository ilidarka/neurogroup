$(document).ready(function(){
	/* скрипт для галерей */
	$('.gallery-wrapper').slick({
		infinite: false,
		slidesToShow: 1,
		initialSlide: 2,
  	});

  	$('.gallery-wrapper2').slick({
		infinite: false,
		slidesToShow: 2,
		initialSlide: 1,
		responsive: [
	    {
	      breakpoint: 574,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	    }}]
  	});


  	/* открытие меню */
	$('.burger-icon').on('click', function(){
		$('.menu-wrapper').toggleClass(' menu--open');
		$('html').toggleClass('overflow-hidden');
	});
	$('.close-icon').on('click', function(){
		$('.menu-wrapper').toggleClass(' menu--open');
		$('html').toggleClass('overflow-hidden');
	});

	/* открытие подпунктов меню */
	$('.menu-box_main').on('click', function(){
		$(this).next().toggleClass('openInner');
		$(this).toggleClass(' main-color');
	})
	$('.menu-box_main2').on('click', function(){
		$(this).children('a').toggleClass(' main-color');
		$(this).children('.menu-box_inner2').toggleClass('openInner');
	})


	$(".popup-link").magnificPopup({

	});



	/* работа табов */
	jQuery('.tabs-wrapper').each(function() {
		let ths = jQuery(this);
		ths.find('.tab-item').not(':first').hide();
		ths.find('.tab').click(function() {
			ths.find('.tab').removeClass('active').eq(jQuery(this).index()).addClass('active');
			ths.find('.tab-item').hide().eq(jQuery(this).index()).fadeIn()
		}).eq(0).addClass('active');
	});



	$('.tab').on('click', function(){
		$('.tab').toggleClass('tab-open');
	});




});
   /*
TedX XIMB V5
24.11.2018
S.G
*/
$(document).ready(function(){
	$(this).scrollTop(0);
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
		if ($(window).scrollTop() > navHeight) {
			$('nav').addClass('fixed');
		}
		else {
			$('nav').removeClass('fixed');
		}
	});
	$("#screen1 nav li a" ).on("click", function() {
		$("#screen1 nav li a").removeClass('clicked');
		$(this).addClass('clicked');
	});
	$(".carousel").not('.slick-initialized').slick({
			autoplay: true,
			dots: true,
			responsive: [{ 
				breakpoint: 500,
				settings: {
					dots: false,
					arrows: false,
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 2
				} 
			}]
		});

	});



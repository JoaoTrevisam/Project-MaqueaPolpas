$(document).ready(function(){
	initializeCarouselDefault(".slideshow");
});


function initializeCarouselDefault(cl){
	$(cl).owlCarousel({
		loop:true,
		nav:true,
		items:1,
		autoplay:true,
		autoplayHoverPause:true,
		autoplayTimeout:3000,
		smartSpeed:1600,
		stopOnHover:true
	});
}
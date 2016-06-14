$(document).ready(function(){

	var options = {
		itemSelector: '.item',
		singleMode: false,
		isResizable: true,
		isAnimated: true,
		animationOptions: { 
			queue: false, 
			duration: 300 
		}
	};
	var grid = $('.grid').imagesLoaded( function() {grid.masonry(options)});
	var portfolioCategory = $(".portfolio-category");
		portfolioCategory.on('click', 'li', function(event) {
			event.preventDefault();
			$(this).addClass('active').siblings().removeClass('active');
			thisId = $(this).attr("data-web");
			$(".item").removeClass('hide');
			grid.masonry("destroy");
			if(thisId == "all") {
				grid.masonry(options);
			} else {
				$(".item:not(."+thisId+")").addClass('hide');
				grid.masonry({
					itemSelector: ".item."+thisId,
					singleMode: false,
					isResizable: true,
					isAnimated: true,
					animationOptions: { 
						queue: false, 
						duration: 300 
					}
				});
			}
		});

	var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        initialSlide: 1,
        loop: true

    });
   
});



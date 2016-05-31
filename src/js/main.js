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
	}
	var grid = $('.grid').masonry(options); 

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
});



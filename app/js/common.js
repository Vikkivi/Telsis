$(function() {
	
	$('.burger--open').click(function(){
		//$('.header__black').toggleClass('black-open');
		$('.header__black').fadeToggle();
		$('.burger').toggleClass('cross');

	});
	
	
  $(".shop__slider").owlCarousel({
    loop:true,
    margin:12,
    responsiveClass:true,
		responsive:{
        0:{
            items:1,
						stagePadding: 20			
        },
        450:{
            items:1,
						stagePadding: 80
        },
				600:{
            items:1,
						stagePadding: 120
        },
        700:{
            items:3,
						stagePadding: 0
        }
    }
	})
	
	$(".gallery__slider").owlCarousel({
    loop:true,
    margin:10,
		nav:true,
		navText : ['<img src="../img/left.png" alt="Назад" class="arrow">','<img src="../img/right.png" alt="Вперед" class="arrow">'],
    responsiveClass:true,
		responsive:{
        0:{
            items:1,
						stagePadding: 30			
        },
				360:{
            items:1,
						stagePadding: 60		
        },
				440:{
            items:1,
						stagePadding: 100		
        },
				540:{
            items:3,
						stagePadding: 0
        },
        730:{
            items:4,
						stagePadding: 0
        }
    }
	})
	
	
});

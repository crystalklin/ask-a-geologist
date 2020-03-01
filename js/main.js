
(function($){
   'use strict'; 
   
 
	$(window).on('load', function() {	

		//PRELOADER
	 $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.

		
	if ($('.isotope_items').length) {

		// PORTFOLIO ISOTOPE
		 var $container = $('.isotope_items');
		 $container.isotope();

		$('.portfolio_filter ul li').on("click", function(){
			$(".portfolio_filter ul li").removeClass("select-cat");
			$(this).addClass("select-cat");				 
			var selector = $(this).attr('data-filter');
			$(".isotope_items").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
		});
			return false;
		});  
		
	}
		
	}); // window load end   
     // WOW JS
    new WOW({ mobile: false }).init();

    /*--
     One Page Menu
    -----------------------------------*/
    var TopOffsetId = $('nav').height() -5;
    $('ul.nav-menu').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2,
        scrollSpeed: 1000,
        scrollOffset: TopOffsetId,
    });
        
   /*  03. scrollUp jquery active */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    //NAVBAR SHOW - HIDE
    $(window).on('scroll',function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".home").height() -36;			

    if (scroll > homeheight ) {												
        $("nav").slideDown(100);
        } else {
        $("nav").slideUp(100);
        }
     }); 
    
    	
    // RESPONSIVE MENU
$('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });
    
    
    // HOME PAGE HEIGHT
     function centerInit() {
        var hometext = $('.home')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).resize(centerInit);
    
    
    // HOME TYPED JS
      $(".element").typed({
        strings: [" Geologist."," Hydrologist.","n Oceanographer."," Cartographer."," Hydrolic Technician."," Geophysicist."],
        typeSpeed: 10,
        loop:true,
        backDelay: 2500
      });
   
   
      // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });
   
   $(".contact-form").on('submit', function(e){
        e.preventDefault();
        
        var uri = $(this).attr('action');
        $("#con_submit").val('Wait...');
        var con_name = $("#con_name").val();
        var con_email = $("#con_email").val();
        var con_message = $("#con_message").val();
        
        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '')
            {
                $(this).addClass('reqError');
                required += 1;
            }
            else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0)
        {
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: {con_name: con_name, con_email: con_email, con_message: con_message},
                success: function(data)
                {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#con_submit").val('Done!');
					$("#con_submit").addClass("ok");
                }
            });
        }
        else
        {
            $("#con_submit").val('Failed!');
        }
   });
   $(".requie").keyup(function() {
        $(this).removeClass('reqError');
    });
   
    $('#slides').superslides({
      animation: 'fade',
      play: 4000
    }); 
	
    $(function(){
      jQuery("#P1").YTPlayer();
    });
	
	
      /* slider active  */
    $('.slider-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })  
   
   
   
   
})(jQuery);	
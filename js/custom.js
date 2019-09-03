(function($) { "use strict";
		
		
	//Page cursors
	
	$(window).mousemove(function(e) { 	  
		$(".cursor").css({
			left: e.pageX,
			top: e.pageY
		})	  
	})
	$(".cursor-link")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active")	  
	})		
	//Blog page cursors with image	
	//Blog post 1:
	$(".cursor-link-blog-post-1")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active-blog-post-1")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active-blog-post-1")	  
	})	
	//Blog post 2:
	$(".cursor-link-blog-post-2")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active-blog-post-2")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active-blog-post-2")	  
	})	
	//Blog post 3:
	$(".cursor-link-blog-post-3")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active-blog-post-3")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active-blog-post-3")	  
	})		
	//Blog post 4:
	$(".cursor-link-blog-post-4")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active-blog-post-4")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active-blog-post-4")	  
	})	
	//Blog post 5:
	$(".cursor-link-blog-post-5")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active-blog-post-5")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active-blog-post-5")	  
	})		
	//Blog post 6:
	$(".cursor-link-blog-post-6")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active-blog-post-6")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active-blog-post-6")	  
	})		
	//Blog post 7:
	$(".cursor-link-blog-post-7")
	.on("mouseenter", function() {	 
	$('.cursor').addClass("active-blog-post-7")	  
	})
	.on("mouseleave", function() {	  
	$('.cursor').removeClass("active-blog-post-7")	  
	})
	
	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();

	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;

		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');

			applyListeners();
		};

		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};

		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};

		init();
	}();		
		
		
	//Parallax & fade on scroll	
	
	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/300)
		});
		$('.parallax-fade-top-pages').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/500)
		});
		$('.parallax-top').css({
		  'top' : (scrollPos/2.2)+'px'
		});
	  });    
	}
	scrollBanner();		

	
	$(document).ready(function() {
		
		
		//Loading page animation
		
		$(".animsition").animsition({	  
			inClass               :   'fade-in-down-sm',
			outClass              :   'fade-out-down-sm',
			inDuration            :    600,
			outDuration           :    400,
			linkElement           :   '.animsition-link', 
			// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			
			overlay               :   false,
			
			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		});	

		
		//Scroll back to top
	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})

		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(5)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(5)').addClass("show");
			$('.case-study-name:nth-child(5)').addClass('active');
		})
		
		$('.case-study-name:nth-child(6)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(6)').addClass("show");
			$('.case-study-name:nth-child(6)').addClass('active');
		})
		$('.case-study-name:nth-child(7)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(7)').addClass("show");
			$('.case-study-name:nth-child(7)').addClass('active');
		})
		$('.case-study-name:nth-child(8)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(8)').addClass("show");
			$('.case-study-name:nth-child(8)').addClass('active');
		})
		$('.case-study-name:nth-child(9)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(9)').addClass("show");
			$('.case-study-name:nth-child(9)').addClass('active');
		})
		$('.case-study-name:nth-child(10)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(10)').addClass("show");
			$('.case-study-name:nth-child(10)').addClass('active');
		})
	
		$('.case-study-name:nth-child(1)').trigger('mouseenter')
		
				
		//Tooltip

		$(".tipped").tipper();
		
		
		/* Video */
		
		$(".container").fitVids();
						
		$('.vimeo a,.youtube a').on('click', function (e) {
			e.preventDefault();
			var videoLink = $(this).attr('href');
			var classeV = $(this).parent();
			var PlaceV = $(this).parent();
			if ($(this).parent().hasClass('youtube')) {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
			} else {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=c4c3ca" width="500" height="281" frameborder="0"></iframe>');
			}
		});	

		
		/* Portfolio Sorting */

		(function ($) { 		
			var container = $('#projects-grid');						
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;								
				if (winWidth > 1500) {
					columnNumb = 2;
				} else if (winWidth > 1200) {
					columnNumb = 2;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 1;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}				
				return columnNumb;
			}						
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}			
			$('#portfolio-filter #filter a').on('click', function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);								
				return false;
			});			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}						
			container.imagesLoaded(function () { 
				setColumnWidth();								
				container.isotope( { 
					itemSelector : '.portfolio-box', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );													
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();				
			} );					
		} )(jQuery);

			
	});
 
	/* DebouncedResize Function */
	
	(function ($) { 
		var $event = $.event, 
			$special, 
			resizeTimeout;				
		$special = $event.special.debouncedresize = { 
			setup : function () { 
				$(this).on('resize', $special.handler);
			}, 
			teardown : function () { 
				$(this).off('resize', $special.handler);
			}, 
			handler : function (event, execAsap) { 
				var context = this, 
					args = arguments, 
					dispatch = function () { 
						event.type = 'debouncedresize';
						
						$event.dispatch.apply(context, args);
					};								
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}								
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			}, 
			threshold : 150 
		};
	} )(jQuery);

	
  })(jQuery); 
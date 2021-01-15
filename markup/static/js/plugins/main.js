
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	// forms();


	// let lazyImages = [...document.querySelectorAll('img')]
	// let inAdvance = 300
	
	// function lazyLoad() {
	// 	lazyImages.forEach(image => {
	// 		if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
	// 			image.src = image.dataset.src
	// 			image.onload = () => image.classList.add('loaded')
	// 		}
	// 	})
	
	// }
	// lazyLoad();
	
	
	// window.addEventListener('scroll', _.throttle(lazyLoad, 16))
	// window.addEventListener('resize', _.throttle(lazyLoad, 16))
	$(".header__mobile").click(function() {
		$(".header__mobile-pop").addClass("active");
	});

	$(".header__mobile-close").click(function() {
		$(".header__mobile-pop").removeClass("active");
	});

	$(".header__left").click(function() {
		$(this).toggleClass("active");
		$(".header__mobile-pop").toggleClass("active");
	});
	$(function() {
 
		$(window).scroll(function() {
		 
		if($(this).scrollTop() != 0) {
		 
		$('#toTop').fadeIn();
		 
		} else {
		 
		$('#toTop').fadeOut();
		 
		}
		 
		});
		 
		$('#toTop').click(function() {
		 
		$('body,html').animate({scrollTop:0},800);
		 
		});
		 
	});


	$(window).scroll(function() {

		var height = $(window).innerHeight()

		if($(this).scrollTop() > height) {
			$('#header').addClass('menu-active');
		}
		else {
			$('#header').removeClass('menu-active');
		}
	});


	var swiper = new Swiper('.-slider', {
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		
	});
	var swiper123 = new Swiper('.slider-tabs', {
		spaceBetween: 10,
		slidesPerView: "auto",
		centeredSlides: true,
	});

	if($(".slider-tabs").length > 0) {
		$(".slider-tabs .tab a").trigger("click");
		swiper123.slideTo(1);
	}
	var swiper = new Swiper('.first__slider', {
		spaceBetween: 30,
		slidesPerView: 1,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 7000,
		},
		loop: true,
		parallax: true,
		navigation: {
			nextEl: '.first-feat-button-next',
			prevEl: '.first-feat-button-prev',
		},
		pagination: {
			el: '.first-pag',
		},
	});
	var swiper12 = new Swiper('.slider-1', {
		spaceBetween: 30,
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			1023: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: '.slider-1-next',
			prevEl: '.slider-1-prev',
		},
	});
	var swiper = new Swiper('.slider-2', {
		spaceBetween: 30,
		slidesPerView: "auto",
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			1023: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: '.slider-2-next',
			prevEl: '.slider-2-prev',
		},
	});
	var swiper = new Swiper('.slider-3', {
		spaceBetween: 70,
		slidesPerView: 3,
		loop: true,
		navigation: {
			nextEl: '.slider-2-next',
			prevEl: '.slider-2-prev',
		},
		slidesPerView: "auto",
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			1023: {
				slidesPerView: 2,
			},
		},
		pagination: {
			el: '.clients-pagination',
		},
	});
	var galleryThumbs = new Swiper('.tovar__thumbs', {
		spaceBetween: 30,
		direction: "vertical",
		slidesPerView: 4,
		freeMode: true,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.tovar__top-slider', {
		spaceBetween: 70,
		thumbs: {
		swiper: galleryThumbs
		},
		breakpoints: {
			1023: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: '.tovar-pagination',
		},
	});
	if ($(window).width() < 769) {
		var swiper = new Swiper('.m-header-slider', {
			spaceBetween: 30,
			slidesPerView: 5,
			loop: true,
			navigation: {
				nextEl: '.block-next',
				prevEl: '.block-prev',
			},
			pagination: {
				el: '.first-pagination',
			},
			breakpoints: {
				600: {
					slidesPerView: 3,
				},
				400: {
					slidesPerView: 2,
				}
			}
		});
		
	}

	if ($(window).width() < 1025) {
		

		var swiper = new Swiper('.header__slider-container', {
			spaceBetween: 10,
			slidesPerView: 5,
			navigation: {
				nextEl: '.block-next',
				prevEl: '.block-prev',
			},
			pagination: {
				el: '.first-pagination',
			},
			breakpoints: {
				600: {
					slidesPerView: 3,
				},
				400: {
					slidesPerView: 4,
				}
			}
		});
		
	}



	if ($(window).width() < 1025) {
		var swiper = new Swiper('.like-slider', {
			spaceBetween: 30,
			slidesPerView: 2,
			navigation: {
				nextEl: '.block-next',
				prevEl: '.block-prev',
			},
			pagination: {
				el: '.first-pagination',
			},
			breakpoints: {
				767: {
					slidesPerView: 1,
				}
			}
		});
		
	}


	$(".sticky-block").stick_in_parent();
	if ($(window).width() < 1025) {
	}

	$(document).ready(function() {
		$('select').niceSelect();
	});

	$(".lightgallery").lightGallery();



	$(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
    });
	
	if ($('#slider').length > 0) {
		var slider = document.getElementById('slider');
		var rangeMin = +$("#slider").attr("data-min")
		var rangeMax = +$("#slider").attr("data-max")

		var valMin = +$(".input-min").val();
		var valMax = +$(".input-max").val();
		
		var rangeStep = $("#slider").data("step")
		$(".output-left").text(parseFloat(valMin).toFixed(0));
		$(".output-right").text(parseFloat(valMax).toFixed(0));
		// $(".input-min").text(parseFloat(rangeMin).toFixed(0));
		noUiSlider.create(slider, {
			start: [valMin, valMax],
			connect: true,
			step: rangeStep,
			range: {
				'min': rangeMin,
				'max': rangeMax
			},
			format: wNumb({
				decimals: 0
			})
			
		});	
		$(".filter__open").click(function() {
			$(".filter__container").addClass("active");
			$(".overlay").addClass("visible")
		});
		$(".filter__close-mobile, .overlay").click(function() {
			$(".filter__container").removeClass("active");
			$(".overlay").removeClass("visible")
		});
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-left").text(parseFloat(val).toFixed(0));
		// 	$(".input-min").val(parseFloat(val).toFixed(0));
		// });
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-right").text(parseFloat(val).toFixed(0));
		// 	$(".input-max").val(parseFloat(val).toFixed(0));
		// });
		slider.noUiSlider.on('slide', function () { 
			$(".noUi-handle-lower").each(function() {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-min").text(val.toFixed(0));
			});
		});
		slider.noUiSlider.on('slide', function () { 
			$(".noUi-handle-upper").each(function() {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-max").text(val.toFixed(0));
			});
		});
	}

	
	
	$(".ymap").each(function(e){
        var ya = this;
        var myMap;
        ymaps.ready(
            function() {
                var x = $(ya).attr("data-x");
                var y = $(ya).attr("data-y");
                    myMap = new ymaps.Map($(ya)[0], {
                        center: [x , y],
                        zoom: 13,
						controls: ['fullscreenControl']						
                    }, {
                        searchControlProvider: 'yandex#search'
                    });
            
                    var myPlacemark = new ymaps.Placemark([x, y], {},
                { iconLayout: 'default#image',
                iconImageHref: 'static/img/content/marker.svg',
                iconImageSize: [37, 37], });    
            
				myMap.geoObjects.add(myPlacemark);

				var ctrlKey = false;
				var ctrlMessVisible = false;
				var timer;
				myMap.behaviors.disable('scrollZoom');
				// myMap.behaviors.disable('scrollZoom');
				myMap.events.add(['wheel', 'mousedown'], function(e) {
					if (e.get('type') == 'wheel') {
						if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
							$('#ymap_ctrl_display').fadeIn(300);
							ctrlMessVisible = true;
							clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
							timer = setTimeout(function() {
								$('#ymap_ctrl_display').fadeOut(300);
								ctrlMessVisible = false;
							}, 1500);
						}
						else { // Ctrl нажат, скрываем сообщение
							$('#ymap_ctrl_display').fadeOut(100);
						}
					}
					if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
						$('#ymap_ctrl_display').fadeOut(100);
					}
				});
				// Обрабатываем нажатие на Ctrl
				$(document).keydown(function(e) {
					if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
						ctrlKey = true;
						myMap.behaviors.enable('scrollZoom');
					}
				});
				$(document).keyup(function(e) { // Ctrl не нажат: выключаем масштабирование мышью
					if (e.which === 17) {
						ctrlKey = false;
						myMap.behaviors.disable('scrollZoom');
					}
				});
            }
        );
		
	})

	
	
	new WOW().init();

	$(".collapsible-body").each(function() {
		var height = $(this).height();
		$(this).css("height", 0);
		$(this).attr("data-height", height)
	});

	$(".collapsible-header").click(function() {
		var body = $(this).next(".collapsible-body");
		var header = $(this);
		if(header.hasClass("active")) {
			header.removeClass("active");
			var height = body.height();
			// body.attr("data-height", height);
			body.height(0);
			body.removeClass("active");
		} else {


			// $(".collapsible-header").removeClass("active");
			// var height = body.height();
			// $(".collapsible-body").attr("data-height", height);
			// $(".collapsible-body").height(0);
			// $(".collapsible-body").removeClass("active");
			
			
			
			
			header.addClass("active");
			var height = body.attr("data-height");
			body.height(height);
		}
	});

	$(".noUi-handle-lower").each(function() {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		$(".filter-output-min").text(val.toFixed(0));
	});
	$(".noUi-handle-upper").each(function() {
		var val = +$(this).find("span").text();
		$(this).find("span").text(val.toFixed(0))
		$(".filter-output-max").text(val.toFixed(0));
	});

	$(".html > img").each(function() {
		$(this).wrap("<figure></figure>")
	});

	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				message: {
					required: true,
				},
				name: {
					required: true,
				},
				nameProd: {
					required: true,	
				},
				check: {
					required: true,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						$(".thanx-trigger").trigger("click");
					}
				});
			},  
         });
	 });

	$('body').on('click','[data-popup]',function(e) { //Вызов попапов
    	e.preventDefault();
    	var popup = $(this).data('popup');
    	var width = $('.blur').prop('scrollWidth');
    	$('html').addClass('no-scroll');
    	$('body').css('width',width);
    	$('.blur').addClass('active');
		$('.popup').removeClass('active');
    	$('.popup-'+popup).addClass('active');
    });
    $('body').on('mousedown','.blur',function(e) { //Закрытие попапов по .blur
    	if (this == e.target) {
    		$('.popup').removeClass('active');
    		$('html').removeClass('no-scroll');
    		$('body').css('width','auto');
			$('.blur').removeClass('active');
			$('.popup').each(function() {
				$(this).find('input[type=text],input[type=mail],textarea').val('');
				$(this).find('input[type=checkbox]').prop('checked', false);
				$(this).find('.active').removeClass('active');
			});
			$(".header__right").removeClass("active");
			$(".catalog__sidebar-container").removeClass('active');

    	}
	});



	$(".fs-hdr").each(function() {
		var screenHeight = $(window).height();
		if ($(window).scrollTop() >= screenHeight) {
			$(this).addClass("fixed");
		}
		if ($(window).scrollTop() < screenHeight) {
			$(this).removeClass("fixed");
		}
	});
	$(window).on('scroll', function () {
		$(".fs-hdr").each(function() {
			var screenHeight = $(window).height();
			if ($(window).scrollTop() >= screenHeight) {
				$(this).addClass("fixed");
			}
			if ($(window).scrollTop() < screenHeight) {
				$(this).removeClass("fixed");
			}
		});
		if ($(window).scrollTop() > 300) {
			$(".first-mouse").addClass("active");
		} else {
			$(".first-mouse").removeClass("active");		
		}
	});
	if ($(window).scrollTop() > 300) {
		$(".first-mouse").addClass("active");
	} else {
		$(".first-mouse").removeClass("active");		
	}

    $('body').on('click','.popup__close',function(e) { //Закрытие попапов по .popup__close
		$('.popup').removeClass('active');
		$('html').removeClass('no-scroll');
		$('body').css('width','auto');
		$('.blur').removeClass('active');
		$('.popup').each(function() {
			$(this).find('input[type=text],input[type=mail],textarea').val('');
			$(this).find('input[type=checkbox]').prop('checked', false);
			$(this).find('.active').removeClass('active');
		});
	});

	if($("#fullpage").length) {
		if ($(window).width() < 1280) {
			$(".fp-tableCell, .fp-table").css("height", "auto");
			$('select').niceSelect();
			$("#fullpage").css({"position": "static", "transform": "none"});
			$.fn.fullpage.destroy();
		}
		$('#fullpage').fullpage({
			scrollingSpeed: 1000,
			autoScrolling:true,
			scrollHorizontally: true,
			navigation: false,
			slidesNavigation: false,
			slidesNavPosition: 'bottom',
			afterLoad: function(index, direction){
				var index = $(".section.active").index() + 1;
				$(".blt").removeClass("hidden");
				$(".blt").removeClass("white");
				$(".blt__item").removeClass("active")
				$(".blt__item:nth-child("+index+")").addClass("active")
				if ($(".section.active").hasClass("serv__section")) {
					$(".blt").addClass("hidden");
				}
				if ($(".section.active").hasClass("no-pag")) {
					$(".blt").addClass("hidden");
				}
				if ($(".section.active").hasClass("blue")) {
					$(".blt").addClass("white");
				}
				$(".blt__cur").text("0" + index);

			 }
		});	
	}

	


	
	$(".info__ctg-item img").click(function(e) {
		$(".info__slider").addClass("active");
		$(".info__slide").removeClass("active");
		e.preventDefault();
		var index = $(this).closest(".info__ctg-item").index() + 1;
		$(".info__nav-link").removeClass("active");
		// $(this).addClass("active");
		$(".info__slide:nth-child("+index+")").addClass("active");
		$(".info__nav-link:nth-child("+index+")").addClass("active");
	});

	$(".tabs").each(function() {
		$('.tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			$(".tab").removeClass("active");
			it.addClass("active");
			$(".cont-tab").removeClass("active");
			$("." + href).each(function () {
				$("." + href).addClass('active');
				$("." + href + " input").val('');
				$("." + href + " input").removeClass("is-focus");
			});
		});
	});	

	$(".info__close").click(function() {
		$(".info__slider").removeClass("active");
		$(".info__slide").removeClass("active");
		$(".info__nav-link").removeClass("active");
	})
	$(".header__mobile-icon").click(function() {
		$(".header__mobile-pop").addClass("active");
	})
	$(".header__mobile-close").click(function() {
		$(".header__mobile-pop").removeClass("active");
	})

	$(".info__nav-link").click(function(e) {
		e.preventDefault();
		var index = $(this).index() + 1;
		$(".info__nav-link").removeClass("active");
		$(this).addClass("active");
		$(".info__slide").removeClass("active");
		$(".info__slide:nth-child("+index+")").addClass("active");
	});

	
	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});
	 
})
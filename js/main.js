document.addEventListener("DOMContentLoaded", function () {
    

// mediaQuery
    const mediaQuery = window.matchMedia("(max-width: 48em)").matches;


// 1. Mainslider
var galleryThumbs = new Swiper('.gallery-thumbs', {
		// slidesPerView: 'auto'

      // spaceBetween: 10,
      speed: 1000,
      effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
      slidesPerView: 1,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });




    var galleryTop = new Swiper('.gallery-top', {
      slidesPerView: 1,
      speed: 3000,
      loop: true,
      effect: 'fade',
  		fadeEffect: {
    	crossFade: true
  		},
      autoplay: {
    		delay: 3000,
  		},

  		

      pagination: {
        el: '.main__swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          if (index < 9) {
    return '<span class="' + className + '">' + '' + (index + 1) + '</span>';
                } else {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
              }
              },
              bulletClass: 'main-swiper-pagination-bullet',
              bulletActiveClass: 'main-swiper-pagination-bullet-active',
              modifierClass: 'main__swiper-pagination',
            },

      navigation: {
    	prevEl: '.main__swiper-button-prev',
    	nextEl: '.main__swiper-button-next',
  	},
      
      thumbs: {
        swiper: galleryThumbs
      }
    }); // end Mainslider

// 2. Categoryslider
var categorySlider = new Swiper('.category__swiper-container', {

    slidesPerView: 'auto',
    //centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },

  pagination: {
        el: '.category__swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          if (index < 9) {
    return '<span class="' + className + '">' + '' + (index + 1) + '</span>';
                } else {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
              }
              },
              bulletClass: 'category-swiper-pagination-bullet',
              bulletActiveClass: 'category-swiper-pagination-bullet-active',
              modifierClass: 'category__swiper-pagination',
            },

      navigation: {
    	prevEl: '.category__swiper-button-prev',
    	nextEl: '.category__swiper-button-next',
  	},

}); // end Categoryslider

// 3. Ourprojects
var ourprojectsSlider = new Swiper('.ourprojects__swiper-container', {

    slidesPerView: 'auto',
    // centeredSlides: true,
    loopedSlides: 20,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3000,
    },


      navigation: {
    	prevEl: '.ourprojects__swiper-button-prev',
    	nextEl: '.ourprojects__swiper-button-next',
  	},

}); // end Ourprojects

// 4. Projectsslider
var projectsSlider = new Swiper('.projectsslider__swiper-container', {

    slidesPerView: 'auto',
    // spaceBetween: 50,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3000,
    },



      navigation: {
    	prevEl: '.projectsslider__swiper-button-prev',
    	nextEl: '.projectsslider__swiper-button-next',
  	},

}); // end Projectsslider



// prod-slider
  var prodSlider = new Swiper('.prod-slider__container', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    speed: 1500,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: '.prod-slider .prod-slider__nav-next',
      prevEl: '.prod-slider .prod-slider__nav-prev',
      disabledClass: 'disabled',
    },
    pagination: {
      el: ".prod-slider__pag",
      bulletClass: "prod-slider__pag-item",
      bulletActiveClass: "active"
    }
  });

  function thumbsSlider(dir = 'vertical') {
    var productionSlider = new Swiper('.production-slider__container', {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      speed: 1500,
      loopedSlides: 20,
      autoplay: {
        delay: 1500,
      },
      navigation: {
        nextEl: '.production-slider .production-slider__nav-next',
        prevEl: '.production-slider .production-slider__nav-prev',
        disabledClass: 'disabled',
      },
      pagination: {
        el: ".production-slider__pag",
        bulletClass: "production-slider__pag-item",
        bulletActiveClass: "active",
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      }
    });
    var productionThumbs = new Swiper('.production-slider__thumbs', {
      slidesPerView: 'auto',
      direction:  dir,
      loop: true,
      centeredSlides: false,
      loopedSlides: 20,
    });
    
    productionSlider.controller.control = productionThumbs;
    productionThumbs.controller.control = productionSlider;
    
  }

  if (document.querySelector('.production-slider')) {
    if (mediaQuery) {
      thumbsSlider('horizontal')
    } else {
      thumbsSlider()
    }
  };

// One page slider

  if (document.querySelector('.test')) {
    centeredSlider()
  }
  function centeredSlider() {
    var test = new Swiper('.test', {
      init: true,
      slidesPerView: 'auto',
      loop: true,
      speed: 1000,
      centeredSlides: true,
      slideActiveClass: 'active',
      observer: true,
      navigation: {
        nextEl: '.test__next',
        prevEl: '.test__prev',
        disabledClass: 'disabled',
      },
    });

    test.on('transitionEnd', function () {
      test.resize.resizeHandler()
    });
    setTimeout(test.resize.resizeHandler, 1001)
  }




// Modal Window
$('.open-modal').click(function (e) {
  e.preventDefault();
  $('.modal').addClass('active')
});

$('.open-modal').click(function (e) {
  e.preventDefault();
  $('.overlay').addClass('active')
});

$('.close-modal').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('active')
});

$('.close-modal').click(function (e) {
  e.preventDefault();
  $('.overlay').removeClass('active')
});

$('.overlay').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('active')
});

$('.overlay').click(function (e) {
  e.preventDefault();
  $('.overlay').removeClass('active')
});


// Popap after push button "send form"

$('.sendwindow').fadeOut();

$('.form__button').click(function(){
      showMessage();
    });

function showMessage() {
        
        $('.sendwindow').fadeIn(500,
            function() {
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });

        setTimeout(function() {
            
            $('.sendwindow').fadeOut(500);
            $('html').removeAttr('style');
        }, '2000');
    };




// nav
    let nav = document.querySelector('.nav')
    let burger = document.querySelector('.burger')
    burger.addEventListener('click', function () {
        this.classList.toggle('active')
        nav.classList.toggle('active')
        toggleScroll('body', false)
    });

// no scroll body
    function toggleScroll(el, bullet) {
        let element = document.querySelector(el)
        if (bullet) {
            element.style.overflow = 'hidden'
            return;
        }
        if (element.style.overflow == 'hidden') {
            element.style.overflow = 'visible'
        } else {
            element.style.overflow = 'hidden'
        }
    };


    // Change content in fields

    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Добавлено файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });

    let inputs__2 = document.querySelectorAll('.input__file__2');
    Array.prototype.forEach.call(inputs__2, function (input__2) {
      let label__2 = input__2.nextElementSibling,
        labelVal__2 = label__2.querySelector('.input__file-button-text__2').innerText;
  
      input__2.addEventListener('change', function (e) {
        let countFiles__2 = '';
        if (this.files && this.files.length >= 1)
          countFiles__2 = this.files.length;
  
        if (countFiles__2)
          label__2.querySelector('.input__file-button-text__2').innerText = 'Добавлено файлов: ' + countFiles__2;
        else
          label__2.querySelector('.input__file-button-text__2').innerText = labelVal__2;
      });
    });













}) // DOMContentLoaded
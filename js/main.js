function scrollHandler() {
  if ($(window).scrollTop() >= $('.about').position().top) {
    $('.nav-wrapper').animate({opacity: '1'}, 800);
    $('.logo').css({'transform':'rotate(180deg)'});

  }

  if ($(window).scrollTop() >= $('.skills').position().top) {

    var circle = document.getElementsByClassName('donut_circle_value_one');
    var circle2 = document.getElementsByClassName('donut_circle_value_two');
    var circle3 = document.getElementsByClassName('donut_circle_value_three');

    setTimeout(function () {
      circle[0].setAttribute('stroke-dashoffset', 0);
      circle2[0].setAttribute('stroke-dashoffset', 0);
      circle3[0].setAttribute('stroke-dashoffset', 0);
    }, 0);

    $('.donut_value').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing'
      });
    });
  }

  if ($(window).scrollTop() >= $('.skills').position().top) {
    var mcircle = document.getElementsByClassName('m-donut_circle_value_one');
    var mcircle2 = document.getElementsByClassName('m-donut_circle_value_two');
    var mcircle3 = document.getElementsByClassName('m-donut_circle_value_three');

    setTimeout(function () {
      mcircle[0].setAttribute('stroke-dashoffset', 0);
      mcircle2[0].setAttribute('stroke-dashoffset', 0);
      mcircle3[0].setAttribute('stroke-dashoffset', 0);
    }, 0);

    $('.m-donut_value').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing'
      });
    });
  }
  
  $('section').each(function() {
  if ($(window).scrollTop() >= $(this).position().top) {
    $(this).find('.vertical-center').animate({top: '0', opacity: '1'}, 800);
    }
  });
}

$(window).on('scroll', scrollHandler);
// 새로고침시 함수 실행 위해서 
scrollHandler();

$('.menu-right button').on('click', function() {
    var id = $(this).attr('id');
    if (id === "about-btn") {
      $('html, body').animate({scrollTop: $('.about').position().top});
    } else if (id === "skills-btn") {
      $('html, body').animate({scrollTop: $('.skills').position().top});
    } else if (id === "web-btn") {
      $('html, body').animate({scrollTop: $('.web').position().top});
    } else if (id === "graphic-btn") {
      $('html, body').animate({scrollTop: $('.graphic').position().top});
    } else if (id === "contact-btn") {
      $('html, body').animate({scrollTop: $('.contact').position().top});
    }
});

$('.m-toggle a').on('click', function() {
  var id = $(this).attr('id');
  if (id === "m-about-btn") {
    $('html, body').animate({scrollTop: $('.about').position().top});
  } else if (id === "m-skills-btn") {
    $('html, body').animate({scrollTop: $('.skills').position().top});
  } else if (id === "m-web-btn") {
    $('html, body').animate({scrollTop: $('.web').position().top});
  } else if (id === "m-graphic-btn") {
    $('html, body').animate({scrollTop: $('.graphic').position().top});
  } else if (id === "m-contact-btn") {
    $('html, body').animate({scrollTop: $('.contact').position().top});
  }
});

$('#toggle').click(function() {
	$('#toggle .bar').toggleClass('animate');
	$('#page').toggleClass('overlay');
});

$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);


window.onload = function () {
  var elm = ".box";
  $(elm).each(function (index) {
      // 개별적으로 Wheel 이벤트 적용
      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;
          var moveTop = $(window).scrollTop();
          var elmSelecter = $(elm).eq(index);
          // 마우스휠을 위에서 아래로
          if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                  try{
                      moveTop = $(elmSelecter).next().offset().top;
                  }catch(e){}
              }
          // 마우스휠을 아래에서 위로
          } else {
              if ($(elmSelecter).prev() != undefined) {
                  try{
                      moveTop = $(elmSelecter).prev().offset().top;
                  }catch(e){}
              }
          }
           
          // 화면 이동
          $("html,body").stop().animate({
              scrollTop: moveTop + 'px'
          }, {
              duration: 600, complete: function () {
              }
          });
      });
  });
}
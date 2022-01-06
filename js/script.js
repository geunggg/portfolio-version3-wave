function scrollHandler() {
  if ($(window).scrollTop() >= $('.about').position().top) {
    $('.nav-wrapper').animate({opacity: '1'}, 800);
    $('.logo').css({'transform':'rotate(180deg)'});
  }

  if ($(window).scrollTop() >= $('.skills').position().top) {
    $('.skill').each(function() {
      var skill = $(this);
      var percentage = skill.find('.percentage').text();
      skill.find('.inner-bar').animate({width: percentage}, 800);
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

$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

window.onload = function () {
  $(".box").each(function () {
      // 개별적으로 Wheel 이벤트 적용
      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } else if (event.detail) delta = -event.detail / 3;
          var moveTop = null;
          // 마우스휠을 위에서 아래로
          if (delta < 0) {
              if ($(this).next() != undefined) {
                  moveTop = $(this).next().offset().top;
              }
          // 마우스휠을 아래에서 위로
          } else {
              if ($(this).prev() != undefined) {
                  moveTop = $(this).prev().offset().top;
              }
          }
          // 화면 이동 0.8초(800)
          $("html,body").stop().animate({
              scrollTop: moveTop + 'px'
          }, {
              duration: 800, complete: function () {
              }
          });
      });
  });
}
function navScroll() {
  if ($(window).scrollTop() >= $('.about').position().top && $(window).scrollTop() < $('.skills').position().top) {
    $('#about-btn').css("color", "#f7cbcb");
    $('#about-btn').css("font-weight", "900");
  } else {
    $('#about-btn').css({'color':'#333333'});
    $('#about-btn').css("font-weight", "400");
  }

  if ($(window).scrollTop() >= $('.skills').position().top && $(window).scrollTop() < $('.web').position().top) {
    $('#skills-btn').css("color", "#e0c3cd");
    $('#skills-btn').css("font-weight", "900");
  } else {
    $('#skills-btn').css({'color':'#333333'});
    $('#skills-btn').css("font-weight", "400");
  }

  if ($(window).scrollTop() >= $('.web').position().top && $(window).scrollTop() < $('.graphic').position().top) {
    $('#web-btn').css("color", "#c8bacf");
    $('#web-btn').css("font-weight", "900");
  } else {
    $('#web-btn').css({'color':'#333333'});
    $('#web-btn').css("font-weight", "400");
  }

  if ($(window).scrollTop() >= $('.graphic').position().top && $(window).scrollTop() < $('.contact').position().top) {
    $('#graphic-btn').css("color", "#adb1d1");
    $('#graphic-btn').css("font-weight", "900");
  } else {
    $('#graphic-btn').css({'color':'#333333'});
    $('#graphic-btn').css("font-weight", "400");
  }

  if ($(window).scrollTop() >= $('.contact').position().top) {
    $('#contact-btn').css("color", "#90a7d2");
    $('#contact-btn').css("font-weight", "900");
  } else {
    $('#contact-btn').css({'color':'#333333'});
    $('#contact-btn').css("font-weight", "400");
  }

}

$(window).on('scroll', navScroll);
// 새로고침시 함수 실행 위해서 
navScroll();

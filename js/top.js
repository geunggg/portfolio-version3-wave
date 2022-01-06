function topScroll() {
  var windowBottom = $(window).scrollTop() + $(window).height();

  if (Math.ceil(windowBottom) == $(document).height()) {
    $('#top_btn').fadeIn(1000);
  } else {
    $('#top_btn').fadeOut(1000);
  }
  
}


$(window).on('scroll', topScroll);
topScroll();

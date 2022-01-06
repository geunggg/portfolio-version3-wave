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
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
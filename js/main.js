// -- Set Dynamic Heights and CSS -- //
$(document).ready(function(){ resizeDiv(); });
window.onresize = function(event) { resizeDiv(); };

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();

  // Home Words
  $('body#home li').css({'height': (vph - 30) / 3 + 'px'});
  $('body#home li svg').css({'height': ((vph - 30) / 3) - 30 + 'px'});
}
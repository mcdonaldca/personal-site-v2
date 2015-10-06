$('#menu-control').click(function() {
  var menuImg = $('#menu-control-img')
  menuImg.toggleClass('rotate');

  if (menuImg.hasClass('rotate')) {
    $('#menu-control-label').html('hide');
  } else {
    $('#menu-control-label').html('menu');
  }

  var animationLength = 1000;
  var menu = $('menu');
  menu.toggleClass('visible');

  if (menu.hasClass("visible")) {
    menu.animate({
      right: '0px'
    }, animationLength); 
  } else {
    menu.animate({
      right: '-200px'
    }, animationLength);  
  }
});
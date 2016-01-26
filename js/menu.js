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

var labelAnimationLength = 200;
$("#menu-control-img").hover(function() {
    if ($("#menu-control-img").hasClass('rotate')) {
      var label = $('#menu-control-label');
      label.html('hide');
      label.animate({
        'margin-left': '0px'
      }, labelAnimationLength);
    }
  }, function(){});

var menuOptionHover = function(option, px) {
  return function() {
    if ($(window).width() >= 768) {
      var label = $('#menu-control-label');
      label.html(option);
      label.animate({
        'margin-left': px
      }, labelAnimationLength);
    }
  }
}

var menuOptions = [['about', '55px'], ['resume', '101px'], ['work', '157px'], ['projects', '200px']];

for(i = 0; i < menuOptions.length; i++) {
  var option = menuOptions[i][0];
  var px = menuOptions[i][1];

  $('#' + option).hover(menuOptionHover(option, px), function(){});
}
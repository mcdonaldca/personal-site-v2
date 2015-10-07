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

var labelReset = function() {
  var label = $('#menu-control-label');
  label.html('hide');
    label.animate({
      'margin-left': '0px'
    }, 1);
}

var labelAnimationLength = 250;
$("#menu-control-img").hover(function() {
    if ($("#menu-control-img").hasClass('rotate')) {
      var label = $('#menu-control-label');
      label.html('hide');
      label.animate({
        'margin-left': '0px'
      }, labelAnimationLength);
    }
  }, function(){});

$("#about").hover(function() {
    var label = $('#menu-control-label');
    label.html('about');
    label.animate({
      'margin-left': '53px'
    }, labelAnimationLength);
  }, function(){});

$("#resume").hover(function() {
    var label = $('#menu-control-label');
    label.html('resume');
    label.animate({
      'margin-left': '98px'
    }, labelAnimationLength);
  }, function(){});

$("#work").hover(function() {
    var label = $('#menu-control-label');
    label.html('work');
    label.animate({
      'margin-left': '154px'
    }, labelAnimationLength);
  }, function(){});

$("#projects").hover(function() {
    var label = $('#menu-control-label');
    label.html('projects');
    label.animate({
      'margin-left': '197px'
    }, labelAnimationLength);
  }, function(){});
var $window = $(window);

function menuClick() {
  var menuImg = $('#menu-control-icon');
  menuImg.toggleClass('rotate');

  if (menuImg.hasClass('rotate')) {
    $('#menu-control-label').html('hide');
  } else {
    $('#menu-control-label').html('menu');
  }

  var animationOpenLength = 750;
  var animationCloseLength = 400;
  var menu = $('menu');
  menu.toggleClass('visible');

  if (menu.hasClass("visible")) {
    menu.animate({
      right: '0px'
    }, animationOpenLength); 
  } else {
    menu.animate({
      right: '-210px'
    }, animationCloseLength);  
  }  
}

function iconMouseOver(el) {
  // This is so gross, I'm so sorry
  $(el.parentElement.childNodes[3]).css("color", "#FFEFC9");
}

function iconMouseOut(el) {
  $(el.parentElement.childNodes[3]).css("color", "#565B70");
}

function mobileWrap(func) {
  return function() {
    if ($window.width() > 753) {
      func(this);
    }
  }
}

function onResize() {
  $("menu .icon.static").each(function() {
    if ($window.width() < 753) {
      iconMouseOver(this);
    } else {
      iconMouseOut(this);
    }
    if ($('#menu-control-icon').hasClass('rotate'))  {
      menuClick();
    } 
  });
}

$('#menu-control').click(menuClick);
$("menu .icon.static").hover(mobileWrap(iconMouseOver), mobileWrap(iconMouseOut));
$(window).resize(onResize);
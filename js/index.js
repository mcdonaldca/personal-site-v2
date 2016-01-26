// Set up fit text for headline resizing 
$(".c-a-m").fitText(1.4, { minFontSize: '22px', maxFontSize: '64px' });
$(".building-stuff").fitText(.7, { minFontSize: '40px', maxFontSize: '129px' });





// "Travel" line animation
$(".travel-hover").hover(function() {
  if ($(window).width() > 768) {
    var travelPaths = ["cloud", "bird1", "bird2", "bird3", "mountain-front", "sun", "sunbeam1", "sunbeam2", "sunbeam3", "mountain-back"];
    var timeElapsed = 0;
    var totalAnimation = 2000;
    var totalLength = 0;

    function delayStroke(path) {
      return function() {
        path.style.strokeDashoffset = '0';
      }
    }

    for (i = 0; i < travelPaths.length; i++) {
      totalLength += document.querySelector('.travel #' + travelPaths[i]).getTotalLength();
    }

    for (i = 0; i < travelPaths.length; i++) {
      var path = document.querySelector('.travel #' + travelPaths[i]);

      var pathLength = path.getTotalLength();
      var time = (pathLength / totalLength) * totalAnimation;

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';
      // Set up the starting positions
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
      path.style.strokeDashoffset = pathLength;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset ' + time.toString() + 'ms ease-in-out';

      // Go! (eventually)
      setTimeout(delayStroke(path), timeElapsed);
      timeElapsed += time;
    }
  }
}, function(){});

// "Hackathons" line animation
$(".hackathons-hover").hover(function() {
  if ($(window).width() > 768) {
    var hackathonPaths = ["rim", "cup", "handle1", "handle2", "base"];
    var timeElapsed = 0;
    var totalAnimation = 2000;
    var totalLength = 0;

    function delayStroke(path) {
      return function() {
        path.style.strokeDashoffset = '0';
      }
    }

    for (i = 0; i < hackathonPaths.length; i++) {
      totalLength += document.querySelector('.hackathons #' + hackathonPaths[i]).getTotalLength();
    }

    for (i = 0; i < hackathonPaths.length; i++) {
      var path = document.querySelector('.hackathons #' + hackathonPaths[i]);

      var pathLength = path.getTotalLength();
      var time = (pathLength / totalLength) * totalAnimation;

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';
      // Set up the starting positions
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
      path.style.strokeDashoffset = pathLength;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset ' + time.toString() + 'ms linear';

      // Go! (eventually)
      setTimeout(delayStroke(path), timeElapsed);
      timeElapsed += time;
    }
  }
}, function(){});

// "Plants" line animation
$(".plants-hover").hover(function() {
  if ($(window).width() > 768) {
    var plantsPaths = ["core", "center", "petal12", "petal1", "petal2", "petal3", "petal4", "petal5", "petal6", "petal7", "petal8", "petal9", "petal10", "petal11"];
    var timeElapsed = 0;
    var totalAnimation = 2000;
    var totalLength = 0;

    function delayStroke(path) {
      return function() {
        path.style.strokeDashoffset = '0';
      }
    }

    for (i = 0; i < plantsPaths.length; i++) {
      totalLength += document.querySelector('.plants #' + plantsPaths[i]).getTotalLength();
    }

    for (i = 0; i < plantsPaths.length; i++) {
      var path = document.querySelector('.plants #' + plantsPaths[i]);

      var pathLength = path.getTotalLength();
      var time = (pathLength / totalLength) * totalAnimation;

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';
      // Set up the starting positions
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
      path.style.strokeDashoffset = pathLength;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset ' + time.toString() + 'ms linear';

      // Go! (eventually)
      setTimeout(delayStroke(path), timeElapsed);
      timeElapsed += time;
    }
  }
}, function(){});

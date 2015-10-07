var camOptions = {
  delay: .25,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true
};

var camTimeline = new TimelineMax(camOptions),
    camShapes   = $('svg.cam > polygon'),
    camStagger  = 0.00475,
    camDuration = 1.5;

var camStaggerFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

var camStaggerTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};

camTimeline.staggerFromTo(camShapes, camDuration, camStaggerFrom, camStaggerTo, camStagger, 0);

$('svg.cam').click(function() {
  camTimeline.isActive() ? camTimeline.pause() : camTimeline.play();
});






$(".travel-hover").hover(function() {
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
}, function(){});

$(".hackathons-hover").hover(function() {
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
}, function(){});

$(".plants-hover").hover(function() {
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
}, function(){});

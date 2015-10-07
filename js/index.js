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








var cloudPath = document.querySelector('.travel #mountain-front');

var cloudLength = cloudPath.getTotalLength();
// Clear any previous transition
cloudPath.style.transition = cloudPath.style.WebkitTransition =
  'none';
// Set up the starting positions
cloudPath.style.strokeDasharray = cloudLength + ' ' + cloudLength;
cloudPath.style.strokeDashoffset = cloudLength;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
cloudPath.getBoundingClientRect();
// Define our transition
cloudPath.style.transition = cloudPath.style.WebkitTransition =
  'stroke-dashoffset 2s linear';
// Go!

$(".travel-hover").hover(function() {
  cloudPath.style.strokeDashoffset = '0';
}, function(){});
var faceOptions = {
  delay: .15,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true
};

var faceTimeline           = new TimelineMax(faceOptions),
    faceShapes   = $('svg.face > g polygon, svg.face > g path'),
    faceStagger  = 0.00475,
    faceDuration = 1.5;

var faceStaggerFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

var faceStaggerTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};

faceTimeline.staggerFromTo(faceShapes, faceDuration, faceStaggerFrom, faceStaggerTo, faceStagger, 0);

$('svg.face').click(function() {
  faceTimeline.isActive() ? faceTimeline.pause() : faceTimeline.play();
});
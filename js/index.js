var camOptions = {
  delay: .25,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true
};

var camTimeline = new TimelineMax(camOptions),
    camShapes   = $('svg.cam > g polygon, svg.cam > g path'),
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
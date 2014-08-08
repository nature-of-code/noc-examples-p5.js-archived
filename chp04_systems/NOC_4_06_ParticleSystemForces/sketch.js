// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;

function setup() {
  createCanvas(640,360);
  setFrameRate(60);
  ps = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  background(51);

  // Apply gravity force to all Particles
  var gravity = createVector(0, 0.1);
  ps.applyForce(gravity);

  ps.addParticle();
  ps.run();
}

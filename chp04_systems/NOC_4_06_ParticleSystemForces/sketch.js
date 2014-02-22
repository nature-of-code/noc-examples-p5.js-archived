// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;

function setup() {
  createGraphics(640,360);
  setFrameRate(60);
  ps = new ParticleSystem(new PVector(width/2, 50));
}

function draw() {
  background(51);

  // Apply gravity force to all Particles
  var gravity = new PVector(0,0.1);
  ps.applyForce(gravity);

  ps.addParticle();
  ps.run();
};
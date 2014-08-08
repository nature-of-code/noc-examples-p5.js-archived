// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  ps = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  background(51);
  ps.addParticle();
  ps.run();
}

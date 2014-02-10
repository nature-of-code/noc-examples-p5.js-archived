// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;

function setup() {
  createGraphics(640,360);
  ps = new ParticleSystem(new PVector(width/2, 50));
}

function draw() {
  background(255);
  ps.addParticle();
  ps.run();

};
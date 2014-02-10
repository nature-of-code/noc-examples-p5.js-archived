// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;
var repeller;

function setup() {
  createGraphics(640,360);
  ps = new ParticleSystem(new PVector(width/2, 50));
  repeller = new Repeller(width/2-20, height/2);
}

function draw() {
  background(255);
  ps.addParticle();

  // Apply gravity force to all Particles
  var gravity = new PVector(0,0.1);
  ps.applyForce(gravity);

  ps.applyRepeller(repeller);

  repeller.display();
  ps.run();

};
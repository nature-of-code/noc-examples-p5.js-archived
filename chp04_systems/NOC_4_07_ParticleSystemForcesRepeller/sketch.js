// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;
var repeller;

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem(createVector(width/2, 50));
  repeller = new Repeller(width/2-20, height/2);
}

function draw() {
  background(51);
  ps.addParticle();

  // Apply gravity force to all Particles
  var gravity = createVector(0,0.05);
  ps.applyForce(gravity);

  ps.applyRepeller(repeller);

  repeller.display();
  ps.run();

}

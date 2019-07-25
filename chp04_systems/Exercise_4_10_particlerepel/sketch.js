// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem();
}

function draw() {
  background(255);
  ps.addParticle(random(width), random(height));

  //PVector gravity = createVector(0,0.1);
  //ps.applyForce(gravity);
  ps.update();
  ps.repels();
  ps.display();
}
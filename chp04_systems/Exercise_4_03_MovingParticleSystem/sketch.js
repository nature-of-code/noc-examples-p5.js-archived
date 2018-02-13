// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(200);

  // Option #1 (move the Particle System origin)
  ps.origin.set(mouseX, mouseY, 0);

  ps.addParticle();
  ps.run();

  // Option #2 (move the Particle System origin)
  // ps.addParticle(mouseX, mouseY);



}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let system;

function setup() {
  createCanvas(640, 360);
  system = new ParticleSystem(width / 2, 50);
}

function draw() {
  background(0);
  system.addParticle();
  system.run();
}
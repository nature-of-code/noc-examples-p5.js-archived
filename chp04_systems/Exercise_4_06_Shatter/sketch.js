// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;

function setup() {
  createCanvas(500, 300);
  ps = new ParticleSystem(200, 100, 10);
}

function draw() {
  background(200);

  ps.display();
  ps.update();
}

function mousePressed() {
  ps.shatter();
}
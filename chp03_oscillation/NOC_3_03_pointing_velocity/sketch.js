// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var mover;

function setup() {
  createGraphics(640, 360);
  mover = new Mover();
}

function draw() {
  background(50);
  mover.update();
  mover.checkEdges();
  mover.display();
}
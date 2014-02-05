// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var movers;

function setup() {
  createGraphics(640,360);
  background(255);
  mover = new Mover();
}

function draw() {
  background(255);
  mover.update();
  mover.checkEdges();
  mover.display();
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let mover;

function setup() {
  createCanvas(640,360);
  mover = new Mover();
}

function keyPressed() {
  if (keyCode === UP_ARROW) mover.changeAcceleration(0.1);
  if (keyCode === DOWN_ARROW) mover.changeAcceleration(-0.1);
}

function draw() {
  background(51);

  mover.update();
  mover.checkEdges();
  mover.display();
}


// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var mover;

var attractor;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
  attractor = new Attractor();
}

function draw() {
  background(51);

  var force = attractor.calculateAttraction(mover);
  mover.applyForce(force);
  mover.update();
  
  attractor.display();
  mover.display();
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}

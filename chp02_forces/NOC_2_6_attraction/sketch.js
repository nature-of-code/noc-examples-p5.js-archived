
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var mover;

var attractor;

function setup() {
  createGraphics(640,360);
  mover = new Mover(); 
  attractor = new Attractor();
};

function draw() {
  background(51);

  var force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();
  
  attractor.drag();
  attractor.hover(mouseX,mouseY);
 
  attractor.display();
  mover.display();
};

function mousePressed() {
  attractor.clicked(mouseX, mouseY);
};

function mouseReleased() {
  attractor.stopDragging();
};
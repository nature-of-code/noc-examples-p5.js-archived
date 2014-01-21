
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
var movers = [];

var attractor;

function setup() {
  createGraphics(640,360);
  for (var i = 0; i < 10; i++) {
    movers[i] = new Mover(random(0.1,2),random(width),random(height));
  }
  attractor = new Attractor();
};

function draw() {
  background(255);

  attractor.display();
  attractor.drag();
  attractor.hover(mouseX, mouseY);

  for (var i = 0; i < movers.length; i++) {
    var force = attractor.attract(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
};

function mousePressed() {
  attractor.clicked(mouseX, mouseY);
};

function mouseReleased() {
  attractor.stopDragging();
};
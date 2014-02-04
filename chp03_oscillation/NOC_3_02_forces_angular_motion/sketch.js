// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var movers = [];
var moversLength = 20;
var a;

function setup() {
  createGraphics(640,360);
  background(255);
  for (i = 0; i < moversLength; i++) {
    movers[i] = new Mover(random(0.1,2),random(width),random(height));
  }
  a = new Attractor();
}

function draw() {
  background(255);

  a.display();

  for (i = 0; i < movers.length; i++) {
    var force = a.attract(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var movers = [];

var G = 1;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 10; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
}

function draw() {
  background(51);

  for (var i = 0; i < movers.length; i++) {
    for (var j = 0; j < movers.length; j++) {
      if (i !== j) {
        var force = movers[j].calculateAttraction(movers[i]);
        movers[i].applyForce(force);
      }
    }

    movers[i].update();
    movers[i].display();
  }
}
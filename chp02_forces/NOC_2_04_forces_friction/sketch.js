// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let movers = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 20; i++) {
    movers[i] = new Mover(random(1, 4), random(width), 0);
  }
}

function draw() {
  background(51);

  for (let i = 0; i < movers.length; i++) {
    let wind = createVector(0.01, 0);
    let gravity = createVector(0, 0.1 * movers[i].mass);

    let c = 0.01;
    let normal = 1;
    let frictionMag = c * normal;
    let friction = movers[i].velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);


    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
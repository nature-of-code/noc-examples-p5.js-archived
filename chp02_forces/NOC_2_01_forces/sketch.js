// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let m;

function setup() {
  createCanvas(640, 360);
  m = new Mover();
}

function draw() {
  background(51);

  let wind = createVector(0.01, 0);
  let gravity = createVector(0, 0.1);
  m.applyForce(wind);
  m.applyForce(gravity);


  m.update();
  m.display();
  m.checkEdges();

}

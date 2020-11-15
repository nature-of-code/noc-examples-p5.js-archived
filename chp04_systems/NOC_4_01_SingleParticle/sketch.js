// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let particle;

function setup() {
  createCanvas(640, 360);
  particle = new Particle(width / 2, 20);
}

function draw() {
  background(0);

  particle.update();
  particle.display();

  let gravity = createVector(0, 0.1);
  particle.applyForce(gravity);

  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
    //print("Particle dead!");
  }
}
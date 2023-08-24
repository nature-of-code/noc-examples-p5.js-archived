// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let particles = [];

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  particles.push(new Particle(createVector(width / 2, 50)));

  // Looping through backwards to delete
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.run();
    if (p.isDead()) {
      //remove the particle
      particles.splice(i, 1);
    }
  }

}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let particles = [];

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);
  particles.push(new Particle(width / 2, 50));

  // Looping through backwards to delete
  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.run();
    if (particle.isDead()) {
      //remove the particle
      particles.splice(i, 1);
    }
  }

}
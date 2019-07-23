// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class constructor
class Particle extends VerletParticle2D {
  constructor(position) {
    super(position);
  }

  // Override the display method
  display() {
    fill(127);
    stroke(200);
    strokeWeight(2);
    ellipse(this.x, this.y, 32, 32);
  }
}
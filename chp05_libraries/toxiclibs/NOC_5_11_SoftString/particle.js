// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class 
class Particle extends VerletParticle2D {
  constructor(x, y) {
    super(x, y);
    this.radius = 4;
  }

  // Override the display method
  display() {
    fill(127);
    stroke(200);
    strokeWeight(2);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
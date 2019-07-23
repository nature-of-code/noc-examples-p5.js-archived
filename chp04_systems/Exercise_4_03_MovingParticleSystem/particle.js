// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

class Particle {

  constructor(x, y) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-2, 0));
    this.position = createVector(x, y);
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2.0;
  }

  // Method to display
  display() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(0, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
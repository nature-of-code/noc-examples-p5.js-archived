// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {

  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.lifespan = 255.0;
  }

  run() {
    let gravity = createVector(0, 0.1);
    this.applyForce(gravity);
    this.update();
    this.display();
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
    this.lifespan -= 3;
  }

  // Method to display
  display() {
    stroke(255, this.lifespan);
    fill(127, this.lifespan);
    circle(this.position.x, this.position.y, 12);
  }

  // Is the particle still useful?
  isDead() {
    return (this.lifespan < 0.0);
  }
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

class Particle {



  constructor(x, y) {
    this.acceleration = createVector();
    this.velocity = p5.Vector.random2D();
    this.position = createVector(x, y);
    this.lifespan = 255.0;
    this.r = 6;
  }

  run() {
    this.update();
    this.display();
  }

  repels(particles) {
    for (let other of particles) {
      if (other != this) {
        let dir = p5.Vector.sub(this.position, other.position);
        if (dir.mag() < this.r * 2) {
          dir.setMag(0.5);
          this.applyForce(dir);
        }
      }
    }
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan -= 2;
  }

  // Method to display
  display() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, this.r * 2);
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
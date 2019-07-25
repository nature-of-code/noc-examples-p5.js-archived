// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class CannonBall {

  constructor(x, y) {
    this.position = new createVector(x, y);
    this.velocity = new createVector();
    this.acceleration = new createVector();
    this.r = 8;
    this.topspeed = 10;
  }

  // Standard Euler integration
   update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

   applyForce(force) {
    this.acceleration.add(force);
  }


   display() {
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    ellipse(0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pendulum

// A Simple Pendulum Class
// Includes functionality for user can click and drag the pendulum

// This constructor could be improved to allow a greater variety of pendulums
function Pendulum(origin_, r_) {
  // Fill all variables
  this.origin = origin_.get();
  this.position = new PVector();
  this.r = r_;
  this.angle = PI/4;

  this.aVelocity = 0.0;
  this.aAcceleration = 0.0;
  this.damping = 0.995;   // Arbitrary damping
  this.ballr = 48.0;      // Arbitrary ball radius
}

Pendulum.prototype.go = function() {
  this.update();
  this.display();
}

// Function to update position
Pendulum.prototype.update = function() {
  // As long as we aren't dragging the pendulum, let it swing!
  var gravity = 0.4;                                               // Arbitrary constant
  this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);  // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
  this.aVelocity += this.aAcceleration;                            // Increment velocity
  this.aVelocity *= this.damping;                                  // Arbitrary damping
  this.angle += this.aVelocity;                                    // Increment angle
}

Pendulum.prototype.display = function() {
  this.position.set(this.r*sin(this.angle), this.r*cos(this.angle), 0);         // Polar to cartesian conversion
  this.position.add(this.origin);                                               // Make sure the position is relative to the pendulum's origin

  stroke(0);
  strokeWeight(2);
  // Draw the arm
  line(this.origin.x, this.origin.y, this.position.x, this.position.y);
  ellipseMode(CENTER);
  fill(175);
  // Draw the ball
  ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
}




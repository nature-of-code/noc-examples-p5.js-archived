// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// This constructor could be improved to allow a greater variety of pendulums
var Pendulum  = function(origin, armLength) {
  this.origin = origin;
  this.armLength = armLength;
  this.position = new PVector();
  this.angle = PI/4;
  
  this.aVelocity = 0.0;
  this.aAcceleration = 0.0;
  // Arbitrary damping
  this.damping = 0.995;
  // Arbitrary ball radius
  this.ballRadius = 48.0;
  this.dragging = false;
};

Pendulum.prototype.go = function() {
  this.update();
  this.display();
};

Pendulum.prototype.update = function() {
  // As long as we aren't dragging the pendulum, let it swing!
  if (!this.dragging) {
    // Arbitrary constant
    var gravity = 0.4;
    // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
    this.aAcceleration = (-1 * gravity / this.armLength) * sin(this.angle);
    // Increment velocity
    this.aVelocity += this.aAcceleration;
    // Arbitrary damping
    this.aVelocity *= this.damping;
    // Increment angle
    this.angle += this.aVelocity;
  }
};

Pendulum.prototype.display = function() {
  // Polar to cartesian conversion
  this.position = new PVector(
     this.armLength * sin(this.angle),
     this.armLength * cos(this.angle));
  this.position.add(this.origin);
  stroke(0);
  strokeWeight(2);
  // Draw the arm
  line(this.origin.x, this.origin.y, this.position.x, this.position.y);
  fill(175);
  if (this.dragging) {
      fill(0);
  }
  // Draw the ball
  ellipse(this.position.x, this.position.y, this.ballRadius, this.ballRadius);
};

// The methods below are for mouse interaction

// This checks to see if we clicked on the pendulum ball
Pendulum.prototype.handleClick = function(mx, my) {
  var d = dist(mx, my, this.position.x, this.position.y);
  if (d < this.ballRadius) {
    this.dragging = true;
  }
};

// This tells us we are not longer clicking on the ball
Pendulum.prototype.stopDragging = function() {
  this.aVelocity = 0; // No velocity once you let go
  this.dragging = false;
};

Pendulum.prototype.handleDrag = function(mx, my) {
  // If we are dragging the ball, we calculate the angle between the 
  // pendulum origin and mouse location
  // we assign that angle to the pendulum
  if (this.dragging) {
    // Difference between 2 points
    var diff = PVector.sub(this.origin, new PVector(mx, my));
    // Angle relative to vertical axis
    this.angle = atan2(-1*diff.y, diff.x) - radians(90);
  }
};
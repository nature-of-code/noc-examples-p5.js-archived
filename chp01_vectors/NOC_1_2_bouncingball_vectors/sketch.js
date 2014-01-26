// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with PVector!
var location;
var velocity;

function setup() {
  createGraphics(640,360);
  background(255);
  location = new PVector(100,100);
  velocity = new PVector(2.5,5);
};

function draw() {
  background(255);
  
  // Add the current speed to the location.
  location.add(velocity);

  if ((location.x > width) || (location.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((location.y > height) || (location.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  // Display circle at x location
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, y, 48, 48);
};


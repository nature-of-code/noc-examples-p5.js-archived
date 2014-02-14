// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Attraction

// A class for a draggable attractive body in our world

function Attractor() {
  this.position = new PVector(width/2, height/2);     // Mass, tied to size
  this.mass = 20;   // position
  this.g = 0.4;
}

Attractor.prototype.attract = function(m) {
  var force = PVector.sub(this.position, m.position);             // Calculate direction of force
  var distance = force.mag();                                 // Distance between objects
  distance = constrain(distance, 5.0, 25.0);                             // Limiting the distance to eliminate "extreme" results for very close or very far objects
  force.normalize();                                            // Normalize vector (distance doesn't matter here, we just want this vector for direction)
  var strength = (this.g * this.mass * m.mass) / (distance * distance); // Calculate gravitional force magnitude
  force.mult(strength);                                         // Get force vector --> magnitude * direction
  return force;
}

// Method to display
Attractor.prototype.display = function () {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 48, 48);
}
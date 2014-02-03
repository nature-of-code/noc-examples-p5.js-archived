// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover(m,x,y) {
    this.mass = m;
    this.position = new PVector(x,y);
    this.velocity = new PVector(0,0);
    this.acceleration = new PVector(0,0);
}
  
Mover.prototype.applyForce = function(force) {
  var f = PVector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(255,127);
  ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
};

Mover.prototype.attract = function(m) {
  var force = PVector.sub(this.position, m.position);             // Calculate direction of force
  var distance = force.mag();                                 // Distance between objects
  distance = constrain(distance, 5.0, 25.0);                             // Limiting the distance to eliminate "extreme" results for very close or very far objects
  force.normalize();                                            // Normalize vector (distance doesn't matter here, we just want this vector for direction

  var strength = (g * this.mass * m.mass) / (distance * distance); // Calculate gravitional force magnitude
  force.mult(strength);                                         // Get force vector --> magnitude * direction
  return force;
  }




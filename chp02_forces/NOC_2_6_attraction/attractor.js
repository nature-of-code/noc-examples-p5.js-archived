// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A class for a draggable attractive body in our world

function Attractor() {
  this.position = new PVector(width/2,height/2);
  this.mass = 20;
  this.G = 1;
  this.dragOffset = new PVector(0,0);
  this.dragging = false;
  this.rollover = false;
};

Attractor.prototype.attract = function(m) {
  var force = PVector.sub(this.position,m.position);       // Calculate direction of force
  var d = force.mag();                                     // Distance between objects
  d = constrain(d,5,25);                                   // Limiting the distance to eliminate "extreme" results for very close or very far objects
  force.normalize();                                       // Normalize vector (distance doesn't matter here, we just want this vector for direction)
  var strength = (this.G * this.mass * m.mass) / (d * d);  // Calculate gravitional force magnitude
  force.mult(strength);                                    // Get force vector --> magnitude * direction
  return force;
}

// Method to display
Attractor.prototype.display = function() {
  ellipseMode(CENTER);
  strokeWeight(4);
  stroke(0);
  if (this.dragging) fill(50);
  else if (this.rollover) fill(100);
  else fill(175,200);
  ellipse(this.position.x,this.position.y,this.mass*2,this.mass*2);
}

  // The methods below are for mouse interaction
Attractor.prototype.clicked = function(mx, my) {
  var d = dist(mx,my,this.position.x,this.position.y);
  if (d < this.mass) {
    this.dragging = true;
    this.dragOffset.x = this.position.x-mx;
    this.dragOffset.y = this.position.y-my;
  }
}

Attractor.prototype.hover = function(mx, my) {
  var d = dist(mx,my,this.position.x,this.position.y);
  if (d < this.mass) {
    this.rollover = true;
  } else {
    this.rollover = false;
  }
}

Attractor.prototype.stopDragging = function() {
  this.dragging = false;
}

Attractor.prototype.drag = function() {
  if (this.dragging) {
    this.position.x = mouseX + this.dragOffset.x;
    this.position.y = mouseY + this.dragOffset.y;
  }
}

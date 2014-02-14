// Nature of Code 2011
// Daniel Shiffman
// Chapter 3: Oscillation

// Class to describe an anchor point that can connect to "Bob" objects via a spring
// Thank you: http://www.myphysicslab.com/spring2d.html

// Constructor
function Spring(x,y,l) {
  this.anchor = new PVector(x, y);
  this.len = l;
  this.k = 0.2;
}

// Calculate spring force
Spring.prototype.connect = function(bob) {
  // Vector pointing from anchor to bob position
  var force = PVector.sub(bob.position, this.anchor);
  // What is distance
  var d = force.mag();
  // Stretch is difference between current distance and rest length
  var stretch = d - this.len;

  // Calculate force according to Hooke's Law
  // F = k * stretch
  force.normalize();
  force.mult(-1 * this.k * stretch);
  bob.applyForce(force);
}

// Constrain the distance between bob and anchor between min and max
Spring.prototype.constrainLength = function(bob, minlen, maxlen) {
  var dir = PVector.sub(bob.position, this.anchor);
  var d = dir.mag();
  // Is it too short?
  if (d < minlen) {
    dir.normalize();
    dir.mult(minlen);
    // Reset position and stop from moving (not realistic physics)
    bob.position = PVector.add(anchor, dir);
    bob.velocity.mult(0);
    // Is it too long?
  } 
  else if (d > maxlen) {
    dir.normalize();
    dir.mult(maxlen);
    // Reset position and stop from moving (not realistic physics)
    bob.position = PVector.add(this.anchor, dir);
    bob.velocity.mult(0);
  }
}

Spring.prototype.display = function() { 
  stroke(0);
  fill(175);
  strokeWeight(2);
  rectMode(CENTER);
  rect(this.anchor.x, this.anchor.y, 10, 10);
}

Spring.prototype.displayLine = function(bob) {
  strokeWeight(2);
  stroke(0);
  line(bob.position.x, bob.position.y, this.anchor.x, this.anchor.y);
}





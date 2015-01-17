// Nature of Code 2011
// Daniel Shiffman
// Chapter 3: Oscillation

// Object to describe an anchor point that can connect to "Bob" objects via a spring
// Thank you: http://www.myphysicslab.com/spring2d.html

var Spring = function(x, y, l) {
  this.anchor = createVector(x, y);
  this.restLength = l;
  this.k = 0.2;

  // Calculate and apply spring force
  this.connect = function(b) {
    // Vector pointing from anchor to bob location
    var force = p5.Vector.sub(b.position, this.anchor);
    // What is distance
    var d = force.mag();
    // Stretch is difference between current distance and rest length
    var stretch = d - this.restLength;

    // Calculate force according to Hooke's Law
    // F = k * stretch
    force.normalize();
    force.mult(-1 * this.k * stretch);
    b.applyForce(force);
  };

  // Constrain the distance between bob and anchor between min and max
  this.constrainLength = function(b, minLength, maxLength) {
    var dir = p5.Vector.sub(b.position, this.anchor);
    var d = dir.mag();
    // Is it too short?
    if (d < minLength) {
      dir.normalize();
      dir.mult(minLength);
      // Reset location and stop from moving (not realistic physics)
      b.position = p5.Vector.add(this.anchor, dir);
      b.velocity.mult(0);
      // Is it too long?
    } else if (d > maxLength) {
      dir.normalize();
      dir.mult(maxLength);
      // Reset location and stop from moving (not realistic physics)
      b.position = p5.Vector.add(this.anchor, dir);
      b.velocity.mult(0);
    }
  };

  // Constrain the distance between bob and anchor between min and max
  this.constrainLength = function(bob, minlen, maxlen) {
    var dir = p5.Vector.sub(bob.position, this.anchor);
    var d = dir.mag();
    // Is it too short?
    if (d < minlen) {
      dir.normalize();
      dir.mult(minlen);
      // Reset position and stop from moving (not realistic physics)
      bob.position = p5.Vector.add(anchor, dir);
      bob.velocity.mult(0);
      // Is it too long?
    } else if (d > maxlen) {
      dir.normalize();
      dir.mult(maxlen);
      // Reset position and stop from moving (not realistic physics)
      bob.position = p5.Vector.add(this.anchor, dir);
      bob.velocity.mult(0);
    }
  };

  this.display = function() {
    stroke(255);
    fill(127);
    strokeWeight(2);
    rectMode(CENTER);
    rect(this.anchor.x, this.anchor.y, 10, 10);
  };

  this.displayLine = function(b) {
    strokeWeight(2);
    stroke(255);
    line(b.position.x, b.position.y, this.anchor.x, this.anchor.y);
  };
};

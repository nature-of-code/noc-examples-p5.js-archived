// Nature of Code 2011
// Daniel Shiffman
// Chapter 3: Oscillation

// Class to describe an anchor point that can connect to "Bob" objects via a spring
// Thank you: http://www.myphysicslab.com/spring2d.html

class Spring { 

  // Constructor
  constructor(a, b, len) {
    this.a = a;
    this.b = b;
    this.len = len;
    this.k = 0.2;
  } 

  // Calculate spring force
  update() {
    // Vector pointing from anchor to bob position
    let force = p5.Vector.sub(this.a.position, this.b.position);
    // What is distance
    let d = force.mag();
    
    // Stretch is difference between current distance and rest length
    let stretch = d - this.len;
  
    // Calculate force according to Hooke's Law
    // F = k * stretch
    force.normalize();
    force.mult(-1 * this.k * stretch);
    this.a.applyForce(force);
    force.mult(-1);
    this.b.applyForce(force);
  }


  display() {
    strokeWeight(2);
    stroke(0);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
  }
}


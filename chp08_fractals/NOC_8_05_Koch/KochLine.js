// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Curve
// A class to describe one line segment in the fractal
// Includes methods to calculate midp5.Vectors along the line according to the Koch algorithm

function KochLine(a,b) {
  // Two p5.Vectors,
  // start is the "left" p5.Vector and 
  // end is the "right p5.Vector
  this.start = a.copy();
  this.end = b.copy();

  this.display = function() {
    stroke(255);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  this.kochA = function() {
    return this.start.copy();
  }

  // This is easy, just 1/3 of the way
  this.kochB = function() {
    var v = p5.Vector.sub(this.end, this.start);
    v.div(3);
    v.add(this.start);
    return v;
  }    

  // More complicated, have to use a little trig to figure out where this p5.Vector is!
  this.kochC = function() {
    var a = this.start.copy(); // Start at the beginning
    var v = p5.Vector.sub(this.end, this.start);
    v.div(3);
    a.add(v);  // Move to point B
    v.rotate(-PI/3); // Rotate 60 degrees
    a.add(v);  // Move to point C
    return a;
  }    

  // Easy, just 2/3 of the way
  this.kochD = function() {
    var v = p5.Vector.sub(this.end, this.start);
    v.mult(2/3.0);
    v.add(this.start);
    return v;
  }

  this.kochE = function() {
    return this.end.copy();
  }
}

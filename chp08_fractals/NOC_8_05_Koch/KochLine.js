// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Curve
// A class to describe one line segment in the fractal
// Includes methods to calculate midPVectors along the line according to the Koch algorithm

function KochLine(a,b) {
  // Two PVectors,
  // start is the "left" PVector and 
  // end is the "right PVector
  this.start = a.get();
  this.end = b.get();
}

KochLine.prototype.display = function() {
  stroke(255);
  line(this.start.x, this.start.y, this.end.x, this.end.y);
}

KochLine.prototype.kochA = function() {
  return this.start.get();
}

// This is easy, just 1/3 of the way
KochLine.prototype.kochB = function() {
  var v = PVector.sub(this.end, this.start);
  v.div(3);
  v.add(this.start);
  return v;
}    

// More complicated, have to use a little trig to figure out where this PVector is!
KochLine.prototype.kochC = function() {
  var a = this.start.get(); // Start at the beginning
  var v = PVector.sub(this.end, this.start);
  v.div(3);
  a.add(v);  // Move to point B
  v.rotate2D(-PI/3); // Rotate 60 degrees
  a.add(v);  // Move to point C
  return a;
}    

// Easy, just 2/3 of the way
KochLine.prototype.kochD = function() {
  var v = PVector.sub(this.end, this.start);
  v.mult(2/3.0);
  v.add(this.start);
  return v;
}

KochLine.prototype.kochE = function() {
  return this.end.get();
}

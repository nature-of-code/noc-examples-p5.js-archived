// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// LSystem Rule class

function Rule(a_, b_) {
  this.a = a_;
  this.b = b_;
}

Rule.prototype.getA = function() {
  return this.a;
};

Rule.prototype.getB = function() {
  return this.b;
};


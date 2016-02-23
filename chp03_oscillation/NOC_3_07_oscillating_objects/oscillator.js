// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Oscillator = function() {
  this.angle = createVector();
  this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
  this.amplitude = createVector(random(20, width/2), random(20, height/2));

  this.oscillate = function() {
    this.angle.add(this.velocity);
  };

  this.display = function() {
    var x = sin(this.angle.x) * this.amplitude.x;
    var y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width/2, height/2);
    stroke(255);
    strokeWeight(2);
    fill(127, 127);
    line(0, 0, x, y);
    ellipse(x, y, 32, 32);
    pop();
  };
};

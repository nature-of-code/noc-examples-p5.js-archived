// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function Box(x, y) {
  this.x = x;
  this.y = y;
  this.w = 16;
  this.h = 16;

  // Drawing the box
  this.display = function() {
    rectMode(CENTER);
    fill(127);
    stroke(200);
    strokeWeight(2);
    rect(this.x,this.y, this.w, this.h);
  };
}

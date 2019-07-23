// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box

class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 16;
    this.h = 16;
  }

  // Drawing the box
  display() {
    rectMode(CENTER);
    fill(127);
    stroke(200);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
  }
}
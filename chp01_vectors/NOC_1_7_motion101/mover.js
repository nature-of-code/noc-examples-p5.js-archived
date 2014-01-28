

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover() {
  this.position = new PVector(random(width), random(height));
  this.velocity = new PVector(random(-2, 2), random(-2, 2));
}

Mover.prototype.update = function() {
  this.position.add(this.velocity);
}

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 48, 48);
}

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
}



// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover() {
  this.location = new PVector(width/2, height/2);
  this.velocity = new PVector(0, 0);
  this.acceleration;
  this.topspeed = 4;
  this.xoff = 1000;
  this.yoff = 0;
  this.r = 16;
}

Mover.prototype.update = function () {
  var mouse = new PVector(mouseX, mouseY);
  var dir = PVector.sub(mouse, this.location);
  dir.normalize();
  dir.mult(0.5);
  this.acceleration = dir;

  this.velocity.add(this.acceleration);
  this.velocity.limit(this.topspeed);
  this.location.add(this.velocity);
}

Mover.prototype.display = function () {
  var theta = this.velocity.heading();

  stroke(0);
  strokeWeight(2);
  fill(127);
  pushMatrix()
  rectMode(CENTER);
  translate(this.location.x,this.location.y);
  rotate(theta);
  rect(0,0,30,10);
  popMatrix();
}

Mover.prototype.checkEdges = function () {
  if (this.location.x > width) {
    this.location.x = 0;
  }
  else if (this.location.x < 0) {
    this.location.x = width;
  }

  if (this.location.y > height) {
    this.location.y = 0;
  }
  else if (this.location.y < 0) {
    this.location.y = height;
  }
}
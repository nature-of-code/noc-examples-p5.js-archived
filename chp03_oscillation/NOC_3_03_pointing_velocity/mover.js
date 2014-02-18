// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function() {
  this.position = new PVector(width/2, height/2);
  this.velocity = new PVector(0, 0);
  this.acceleration = 0;
  this.topspeed = 4;
  this.xoff = 1000;
  this.yoff = 0;
  this.r = 16;
};

Mover.prototype.update = function () {
  var mouse = new PVector(mouseX, mouseY);
  var dir = PVector.sub(mouse, this.position);
  dir.normalize();
  dir.mult(0.5);
  this.acceleration = dir;

  this.velocity.add(this.acceleration);
  this.velocity.limit(this.topspeed);
  this.position.add(this.velocity);
};

Mover.prototype.display = function () {
  var angle = this.velocity.heading();

  stroke(0);
  strokeWeight(2);
  fill(127);
  pushMatrix();
  rectMode(CENTER);

  translate(this.position.x, this.position.y);
  rotate(angle);
  rect(0, 0, 30, 10);

  popMatrix();
};

Mover.prototype.checkEdges = function () {
  if (this.position.x > width) {
    this.position.x = 0;
  } else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = height;
  }
};

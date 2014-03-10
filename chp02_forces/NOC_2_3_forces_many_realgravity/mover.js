// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover(m,x,y) {
    this.mass = m;
    this.position = new PVector(x,y);
    this.velocity = new PVector(0,0);
    this.acceleration = new PVector(0,0);
}
  
Mover.prototype.applyForce = function(force) {
  var f = PVector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(255,127);
  ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
};

Mover.prototype.checkEdges = function() {
  if (this.position.x > width) {
    this.position.x = width;
    this.velocity.x *= -1;
  } else if (this.position.x < 0) {
    this.velocity.x *= -1;
    this.position.x = 0;
  }
  if (this.position.y > height) {
    this.velocity.y *= -1;
    this.position.y = height;
  }
};




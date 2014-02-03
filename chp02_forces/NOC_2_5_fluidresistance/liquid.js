// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Liquid(x_, y_, w_, h_, c_) {
  this.x = x_;
  this.y = y_;
  this.w = w_;
  this.h = h_;
  this.c = c_;
};
  
  // Is the Mover in the Liquid?
Liquid.prototype.contains = function(m) {
  var l = m.position;
  return l.x > this.x && l.x < this.x + this.w && l.y > this.y && l.y < this.y + this.h;
};
  
  // Calculate drag force
Liquid.prototype.drag = function(m) {
  // Magnitude is coefficient * speed squared
  var speed = m.velocity.mag();
  var dragMagnitude = this.c * speed * speed;

  // Direction is inverse of velocity
  var dragForce = m.velocity.get();
  dragForce.mult(-1);
  
  // Scale according to magnitude
  // dragForce.setMag(dragMagnitude);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};
  
Liquid.prototype.display = function() {
  noStroke();
  fill(51);
  rect(this.x,this.y,this.w,this.h);
};

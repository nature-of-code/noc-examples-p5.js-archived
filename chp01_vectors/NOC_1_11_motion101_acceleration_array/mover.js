

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover() {
  this.position = new PVector(random(width),random(height));
  this.velocity = new PVector();
  this.acceleration = new PVector();
  this.topspeed = 5;  
}

Mover.prototype.update = function() {
  // Compute a vector that points from position to mouse
  var mouse = new PVector(mouseX,mouseY);
  this.acceleration = PVector.sub(mouse,this.position);
  // Set magnitude of acceleration
  this.acceleration.setMag(0.2);

  this.velocity.add(this.acceleration);
  this.velocity.limit(this.topspeed);
  this.position.add(this.velocity);  
}

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 48, 48);
}


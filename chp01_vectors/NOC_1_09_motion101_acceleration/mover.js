

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover() {
  this.position = createVector(width/2,height/2);
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 5;  
}

Mover.prototype.update = function() {

  // this.acceleration = p5.Vector.random2D();
  // random2D() not implemented? doing raw math for now instead
  var angle = random(TWO_PI);
  this.acceleration = createVector(cos(angle),sin(angle));
  this.acceleration.mult(random(2));

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



// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

function Particle(location) {
  this.acceleration = new PVector(0, 0.05);
  this.velocity = new PVector(random(-1, 1), random(-1, 0));
  // this.velocity = new PVector(1, 1);
  this.location = location.get();
  this.lifespan = 255.0;  
}

Particle.prototype.run = function() {
  this.update();
  this.display();
}

// Method to update location
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.lifespan -= 2;
}

// Method to display
Particle.prototype.display = function() {
  stroke(0, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.location.x, this.location.y, 12, 12);
}

 // Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0.0) {
      return true;
    } 
    else {
      return false;
    }
}

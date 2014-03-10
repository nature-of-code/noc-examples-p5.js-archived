// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class constructor
function Particle(position) {
  VerletParticle2D.call(this,position);
}

// Inherit from the parent class
Particle.prototype = Object.create(VerletParticle2D.prototype);
Particle.prototype.constructor = Particle;

// Override the display method
Particle.prototype.display = function(){
  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(this.x,this.y,32,32);
}

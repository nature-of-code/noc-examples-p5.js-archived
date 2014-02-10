// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Confetti(location){
	this.location = location;	
}

Confetti.prototype = Particle.prototype;

// Inherits update() from parent

// Override the display method
Confetti.prototype.display = function(){
	rectMode(CENTER);
    fill(127,this.lifespan);
    stroke(0,this.lifespan);
    strokeWeight(2);
    pushMatrix();
    translate(this.location.x,this.location.y);
    var theta = map(this.location.x,0,width,0,TWO_PI*2);
    rotate(theta);
    rect(0,0,12,12);
    popMatrix();
}
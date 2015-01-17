// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Force directed graph
// Heavily based on: http://code.google.com/p/fidgen/

// Notice how we are using inheritance here!
// We could have just stored a reference to a VerletParticle object
// inside the Node object, but inheritance is a nice alternative

function Node(pos) {
  VerletParticle2D.call(this,pos);

  // Override the display method
  this.display = function(){
    fill(127);
    stroke(200);
    strokeWeight(2);
    ellipse(this.x,this.y,16,16);
  }
}

// Inherit from the parent class
Node.prototype = Object.create(VerletParticle2D.prototype);
Node.prototype.constructor = Node;



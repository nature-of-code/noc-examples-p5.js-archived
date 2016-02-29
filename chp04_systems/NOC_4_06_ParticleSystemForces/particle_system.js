// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ParticleSystem = function(position) {
	this.origin = position.copy();
	this.particles = [];

  this.addParticle = function() {
  	this.particles.push(new Particle(this.origin));
  };

  this.run = function(){
  	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

  // A function to apply a force to all Particles
  this.applyForce = function(f){
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].applyForce(f);
    }
  };
};

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function ParticleSystem(position){	
	this.origin = position.get();
	this.particles = [];
}

ParticleSystem.prototype.addParticle = function(){
	this.particles.push(new Particle(this.origin));
}

ParticleSystem.prototype.run = function(){
	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }

}

// A function to apply a force to all Particles
ParticleSystem.prototype.applyForce = function(f){
  for(var i = 0; i < this.particles.length; i++){
    this.particles[i].applyForce(f);
  }
}

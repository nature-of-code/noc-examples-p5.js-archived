// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ParticleSystem = function(num, position) {
	this.origin = position.copy();
	this.particles = [];
  for (var i = 0; i < num; i++) {
      this.particles.push(new Particle(this.origin));    // Add "num" amount of particles to the arraylist
      }

  this.addParticle = function() {
  	this.particles.push(new Particle(this.origin));
  };

  this.run = function() {
  	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
};

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class ParticleSystem {
  constructor(num, position) {
    this.origin = position.copy();
    this.particles = [];
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.origin));
    }
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
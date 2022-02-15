// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Using Generics now!  comment and annotate, etc.

class ParticleSystem {

  constructor() {
    this.particles = [];
  }

  addParticle(x, y) {
    this.particles.push(new Particle(x, y));
  }

  display() {
    for (let particle of this.particles) {
      particle.display();
    }
  }

  applyForce(f) {
    for (let particle of this.particles) {
      p.applyForce(f);
    }
  }

  repels() {
    for (let particle of this.particles) {
      particle.repels(this.particles);
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.run();
    }
    this.particles = this.particles.filter(particle => !particle.isDead());
  }
}
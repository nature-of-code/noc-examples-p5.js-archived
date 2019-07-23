// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class constructor
class Particle extends VerletParticle2D {
  constructor(position, radius, range, strength) {
    super(position);
    this.r = radius;
    physics.addParticle(this);


    this.behavior = new AttractionBehavior(this, range, strength);
    // this.behavior.radius = 5.0;
    // this.behavior.radiusSquared = 5 * 5;
    physics.addBehavior(this.behavior);

    //console.log(this.behavior);
  }

  // Override the display method
  display() {
    fill(127);
    stroke(200);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
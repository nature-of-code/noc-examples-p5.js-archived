// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pathfinding w/ Genetic Algorithms

// DNA is an array of vectors

function DNA(newgenes) {
  // The maximum strength of the forces
  this.maxforce = 0.1;

  // The genetic sequence
  if (newgenes) {
    this.genes = newgenes;
  } else {
    this.genes = [];
    // Constructor (makes a DNA of random PVectors)
    for (var i = 0; i < lifetime; i++) {
      var angle = random(TWO_PI);
      this.genes[i] = createVector(cos(angle), sin(angle));
      this.genes[i].mult(random(0, this.maxforce));
    }
  }

  // Let's give each Rocket an extra boost of strength for its first frame
  this.genes[0].normalize();

  // CROSSOVER
  // Creates new DNA sequence from two (this & and a partner)
  this.crossover = function(partner) {
    var child = new Array(this.genes.length);
    // Pick a midpoint
    var crossover = int(random(this.genes.length));
    // Take "half" from one and "half" from the other
    for (var i = 0; i < this.genes.length; i++) {
      if (i > crossover) child[i] = this.genes[i];
      else child[i] = partner.genes[i];
    }
    var newgenes = new DNA(child);
    return newgenes;
  }

  // Based on a mutation probability, picks a new random Vector
  this.mutate = function(m) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < m) {
        var angle = random(TWO_PI);
        this.genes[i] = createVector(cos(angle), sin(angle));
        this.genes[i].mult(random(0, this.maxforce));
        //        var angle = random(-0.1,0.1);
        //        genes[i].rotate(angle);
        //        var factor = random(0.9,1.1);
        //        genes[i].mult(factor);
        if (i == 0) this.genes[i].normalize();
      }
    }
  }
}

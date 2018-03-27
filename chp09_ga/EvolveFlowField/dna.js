// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pathfinding w/ Genetic Algorithms

// DNA is an array of vectors

// Constructor (makes a DNA of random PVectors)
class DNA {
  constructor(num) {
    // The genetic sequence
    if (num instanceof Array) {
      let newgenes = num;
      this.genes = newgenes;
    } else {
      this.genes = new Array(num);
      for (let i = 0; i < this.genes.length; i++) {
        this.genes[i] = p5.Vector.random2D();
      }
    }
  }

  // CROSSOVER
  // Creates new DNA sequence from two (this & and a partner)
  crossover(partner) {
    let child = [];
    // Pick a midpoint
    let crossover = floor(random(this.genes.length));
    // Take "half" from one and "half" from the other
    for (let i = 0; i < this.genes.length; i++) {
      if (i > crossover) child[i] = this.genes[i];
      else child[i] = partner.genes[i];
    }
    let newgenes = new DNA(child);
    return newgenes;
  };

  // Based on a mutation probability, picks a new random Vector
  mutate(m) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < m) {
        this.genes[i] = p5.Vector.random2D();
      }
    }
  };

  debugDraw() {
    let cols = floor(width / gridscale);
    let rows = floor(height / gridscale);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        this.drawVector(this.genes[i + j * cols], i * gridscale, j * gridscale, gridscale - 2);
      }
    }
  }

  // Renders a vector object 'v' as an arrow and a location 'x,y'
  drawVector(v, x, y, scayl) {
    push();
    let arrowsize = 4;
    // Translate to location to render vector
    translate(x + gridscale / 2, y);
    stroke(0, 100);
    // Call vector heading function to get direction (note that pointing up is a heading of 0) and rotate
    rotate(v.heading());
    // Calculate length of vector & scale it to be bigger or smaller if necessary
    let len = v.mag() * scayl;
    // Draw three lines to make an arrow (draw pointing up since we've rotate to the proper direction)
    line(-len / 2, 0, len / 2, 0);
    //noFill();
    //ellipse(-len/2,0,2,2);
    pop();
  }

}
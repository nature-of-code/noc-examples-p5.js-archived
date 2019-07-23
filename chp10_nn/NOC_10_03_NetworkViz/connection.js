// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

class Connection {
  constructor(from, to, w) {
    // Connection has a weight
    this.weight = w;
    // Connection is from Neuron A to B
    this.a = from;
    this.b = to;
  }

  // Drawn as a line
  display() {
    stroke(0);
    strokeWeight(this.weight * 4);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
  }
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Force directed graph
// Heavily based on: http://code.google.com/p/fidgen/

class Cluster {
  constructor(n, d, center) {

    // A cluster is a grouping of nodes
    this.nodes = [];
    // Set the diameter
    this.diameter = d;

    // Create the nodes
    for (let i = 0; i < n; i++) {
      // We can't put them right on top of each other
      this.nodes.push(new Node(center.add(Vec2D.randomVector())));
    }

    // Connect all the nodes with a Spring
    for (let i = 0; i < this.nodes.length - 1; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        // A Spring needs two particles, a resting length, and a strength
        physics.addSpring(new VerletSpring2D(this.nodes[i], this.nodes[j], this.diameter, 0.01));
      }
    }
  }


  display() {
    // Show all the nodes
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].display();
    }
  }

  // Draw all the internal connections
  showConnections() {
    stroke(255, 150);
    strokeWeight(2);
    for (let i = 0; i < this.nodes.length - 1; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        line(this.nodes[i].x, this.nodes[i].y, this.nodes[j].x, this.nodes[j].y);
      }
    }
  }
}
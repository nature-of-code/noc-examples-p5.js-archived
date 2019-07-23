// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

class Neuron {
  constructor(x, y) {
    // Neuron has a position
    this.position = createVector(x, y);
    // Neuron has a list of connections
    this.connections = [];

    // We now track the inputs and sum them
    this.sum = 0;

    // The Neuron's size can be animated
    this.r = 32;
  }


  // The Neuron fires
  fire() {
    this.r = 64; // It suddenly is bigger

    // We send the output through all connections
    for (let i = 0; i < this.connections.length; i++) {
      let c = this.connections[i];
      c.feedforward(this.sum);
    }
  }

  // Receive an input
  feedforward(input) {
    // Accumulate it
    this.sum += input;
    // Activate it?
    if (this.sum > 1) {
      this.fire();
      this.sum = 0; // Reset the sum to 0 if it fires
    }
  }


  // Add a Connection
  addConnection(c) {
    this.connections.push(c);
  }

  // Draw Neuron as a circle
  show() {
    stroke(0);
    strokeWeight(1);
    // Brightness is mapped to sum
    let b = map(this.sum, 0, 1, 0, 255);

    b += map(this.r, 32, 64, 0, 500);

    fill(b);
    ellipse(this.position.x, this.position.y, this.r, this.r);

    // Size shrinks down back to original dimensions
    this.r = lerp(this.r, 32, 0.1);

    // Draw all its connections
    // for (let i = 0; i < this.connections.length; i++) {
    //   this.connections[i].display();
    // }
  }
}
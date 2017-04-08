// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

function Neuron(x, y) {
  // Neuron has a position
  this.position = createVector(x, y);
  // Neuron has a list of connections
  this.connections = [];

  // We now track the inputs and sum them
  this.sum = 0;

  // The Neuron's size can be animated
  this.r = 32;


  // The Neuron fires
  this.fire = function() {
    this.r = 64; // It suddenly is bigger

    // We send the output through all connections
    for (var i = 0; i < this.connections.length; i++) {
      var c = this.connections[i];
      c.feedforward(this.sum);
    }
  }

  // Receive an input
  this.feedforward = function(input) {
    // Accumulate it
    this.sum += input;
    // Activate it?
    if (this.sum > 1) {
      this.fire();
      this.sum = 0; // Reset the sum to 0 if it fires
    }
  }


  // Add a Connection
  this.addConnection = function(c) {
    this.connections.push(c);
  }

  // Draw Neuron as a circle
  this.show = function() {
    stroke(0);
    strokeWeight(1);
    // Brightness is mapped to sum
    var b = map(this.sum, 0, 1, 0, 255);

    b += map(this.r, 32, 64, 0, 500);

    fill(b);
    ellipse(this.position.x, this.position.y, this.r, this.r);

    // Size shrinks down back to original dimensions
    this.r = lerp(this.r, 32, 0.1);

    // Draw all its connections
    // for (var i = 0; i < this.connections.length; i++) {
    //   this.connections[i].display();
    // }
  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

class Network {
  constructor() {
    // The Network has a list of neurons
    this.neurons = [];
  }

  // We can add a Neuron
  addNeuron(n) {
    this.neurons.push(n);
  }

  // We can connection two Neurons
  connect(a, b) {
    let c = new Connection(a, b, random(1));
    a.addConnection(c);
  }

  // We can draw the network
  show() {
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].show();
    }
  }
}
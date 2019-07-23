// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

class Network {
  constructor() {
    // The Network has a list of neurons
    this.neurons = [];
    // Also storing list of connections ("edges")
    this.connections = [];
  }

  // We can add a Neuron
  addNeuron(n) {
    this.neurons.push(n);
  }

  // We can connection two Neurons
  connect(a, b) {
    let c = new Connection(a, b, random(1));
    a.addConnection(c);
    this.connections.push(c);
  }


  // Sending an input to the first Neuron
  // We should do something better to track multiple inputs
  feedforward(inputs) {
    for (let i = 0; i < inputs.length; i++) {
      let neuron = this.neurons[i];
      neuron.feedforward(inputs[i]);
    }
  }

  // Update the animation
  update() {
    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
  }

  // We can draw the network
  show() {
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].show();
    }
    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].show();
    }

  }
}
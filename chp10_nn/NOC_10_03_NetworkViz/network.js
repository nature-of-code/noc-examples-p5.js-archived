// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

function Network() {
  // The Network has a list of neurons
  this.neurons = [];

  // We can add a Neuron
  this.addNeuron = function(n) {
    this.neurons.push(n);
  }

  // We can connection two Neurons
  this.connect = function(a, b) {
    var c = new Connection(a, b, random(1));
    a.addConnection(c);
  }

  // We can draw the network
  this.show = function() {
    for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].show();
    }
  }
}

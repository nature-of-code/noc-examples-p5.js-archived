// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

function Network() {
  // The Network has a list of neurons
  this.neurons = [];
  // Also storing list of connections ("edges")
  this.connections = [];

  // We can add a Neuron
  this.addNeuron = function(n) {
    this.neurons.push(n);
  }

  // We can connection two Neurons
  this.connect = function(a, b) {
    var c = new Connection(a, b, random(1));
    a.addConnection(c);
    this.connections.push(c);
  }


  // Sending an input to the first Neuron
  // We should do something better to track multiple inputs
  this.feedforward = function(inputs) {
    for (var i = 0; i < inputs.length; i++) {
      var neuron = this.neurons[i];
      neuron.feedforward(inputs[i]);
    }
  }

  // Update the animation
  this.update = function() {
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
  }

  // We can draw the network
  this.show = function() {
    for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].show();
    }
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].show();
    }

  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

var network;

function setup() {
  createCanvas(640, 360);
  // Create the Network object
  network = new Network();

  // Create a bunch of Neurons

  // Two inputs
  var x0 = new Neuron(-200, -75);
  var x1 = new Neuron(-200, 75);

  // Two hidden
  var h0 = new Neuron(0, -75);
  var h1 = new Neuron(0, 75);

  // One output
  var y = new Neuron(200, 0);

  // Connect them
  network.connect(x0, h0);
  network.connect(x0, h1);
  network.connect(x1, h0);
  network.connect(x1, h1);
  network.connect(h0, y);
  network.connect(h1, y);

  // Add them to the Network
  network.addNeuron(x0);
  network.addNeuron(x1);
  network.addNeuron(h0);
  network.addNeuron(h1);
  network.addNeuron(y);
}

function draw() {
  background(200);
  translate(width / 2, height / 2);
  // Draw the Network
  network.show();

  // Update the Network
  network.update();

  if (frameCount % 30 == 0) {
    var inputs = [random(1), random(1)]
    network.feedforward(inputs);
  }
}

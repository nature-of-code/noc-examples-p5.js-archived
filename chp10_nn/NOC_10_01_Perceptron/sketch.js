// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Perceptron Example
// See: http://en.wikipedia.org/wiki/Perceptron

// Code based on text "Artificial Intelligence", George Luger

// A list of points we will use to "train" the perceptron
var training = new Array(2000);
// A Perceptron object
var ptron;

// We will train the perceptron with one "Point" object at a time
var count = 0;

// Coordinate space
var xmin = -1;
var ymin = -1;
var xmax = 1;
var ymax = 1;

// The function to describe a line
function f(x) {
  var y = 0.3 * x + 0.4;
  return y;
}

function setup() {
  createCanvas(400, 400);

  // The perceptron has 3 inputs -- x, y, and bias
  // Second value is "Learning Constant"
  ptron = new Perceptron(3, 0.001); // Learning Constant is low just b/c it's fun to watch, this is not necessarily optimal

  // Create a random set of training points and calculate the "known" answer
  for (var i = 0; i < training.length; i++) {
    var x = random(xmin, xmax);
    var y = random(ymin, ymax);
    var answer = 1;
    if (y < f(x)) answer = -1;
    training[i] = {
      input: [x, y, 1],
      output: answer
    };
  }
}


function draw() {
  background(0);

  // Draw the line
  strokeWeight(1);
  stroke(255);
  var x1 = map(xmin, xmin, xmax, 0, width);
  var y1 = map(f(xmin), ymin, ymax, height, 0);
  var x2 = map(xmax, xmin, xmax, 0, width);
  var y2 = map(f(xmax), ymin, ymax, height, 0);
  line(x1, y1, x2, y2);

  // Draw the line based on the current weights
  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
  stroke(255);
  strokeWeight(2);
  var weights = ptron.getWeights();
  var x1 = xmin;
  var y1 = (-weights[2] - weights[0] * x1) / weights[1];
  var x2 = xmax;
  var y2 = (-weights[2] - weights[0] * x2) / weights[1];

  var x1 = map(x1, xmin, xmax, 0, width);
  var y1 = map(y1, ymin, ymax, height, 0);
  var x2 = map(x2, xmin, xmax, 0, width);
  var y2 = map(y2, ymin, ymax, height, 0);
  line(x1, y1, x2, y2);


  // Train the Perceptron with one "training" point at a time
  ptron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length;

  // Draw all the points based on what the Perceptron would "guess"
  // Does not use the "known" correct answer
  for (var i = 0; i < count; i++) {
    stroke(255);
    strokeWeight(1);
    fill(255);
    var guess = ptron.feedforward(training[i].input);
    if (guess > 0) noFill();

    var x = map(training[i].input[0], xmin, xmax, 0, width);
    var y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 8, 8);
  }
}

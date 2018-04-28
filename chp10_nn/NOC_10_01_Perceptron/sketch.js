// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Perceptron Example
// See: http://en.wikipedia.org/wiki/Perceptron

// Code based on text "Artificial Intelligence", George Luger

// A list of points we will use to "train" the perceptron
let training = new Array(2000);
// A Perceptron object
let ptron;

// We will train the perceptron with one "Point" object at a time
let count = 0;

// Coordinate space
let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

// The function to describe a line
function f(x) {
  let y = 0.3 * x + 0.4;
  return y;
}

function setup() {
  createCanvas(400, 400);

  // The perceptron has 3 inputs -- x, y, and bias
  // Second value is "Learning Constant"
  ptron = new Perceptron(3, 0.001); // Learning Constant is low just b/c it's fun to watch, this is not necessarily optimal

  // Create a random set of training points and calculate the "known" answer
  for (let i = 0; i < training.length; i++) {
    let x = random(xmin, xmax);
    let y = random(ymin, ymax);
    let answer = 1;
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
  let x1 = map(xmin, xmin, xmax, 0, width);
  let y1 = map(f(xmin), ymin, ymax, height, 0);
  let x2 = map(xmax, xmin, xmax, 0, width);
  let y2 = map(f(xmax), ymin, ymax, height, 0);
  line(x1, y1, x2, y2);

  // Draw the line based on the current weights
  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
  stroke(255);
  strokeWeight(2);
  let weights = ptron.getWeights();
  x1 = xmin;
  y1 = (-weights[2] - weights[0] * x1) / weights[1];
  x2 = xmax;
  y2 = (-weights[2] - weights[0] * x2) / weights[1];

  x1 = map(x1, xmin, xmax, 0, width);
  y1 = map(y1, ymin, ymax, height, 0);
  x2 = map(x2, xmin, xmax, 0, width);
  y2 = map(y2, ymin, ymax, height, 0);
  line(x1, y1, x2, y2);


  // Train the Perceptron with one "training" point at a time
  ptron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length;

  // Draw all the points based on what the Perceptron would "guess"
  // Does not use the "known" correct answer
  for (let i = 0; i < count; i++) {
    stroke(255);
    strokeWeight(1);
    fill(255);
    let guess = ptron.feedforward(training[i].input);
    if (guess > 0) noFill();

    let x = map(training[i].input[0], xmin, xmax, 0, width);
    let y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 8, 8);
  }
}

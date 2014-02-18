// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array of objects
var oscillators = [];

function setup()  {
  createGraphics(640, 360);
  smooth();
  // Initialize all objects
  for (var i = 0; i < 10; i++) {
    oscillators.push(new Oscillator());
  }
  background(255);
}

function draw() {
  background(255);
  // Run all objects
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}
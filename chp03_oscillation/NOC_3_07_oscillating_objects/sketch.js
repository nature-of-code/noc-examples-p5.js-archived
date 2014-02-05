// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array of objects
oscillators = [];
oscillatorsLength = 10;

function setup()  {
  createGraphics(640,360);
  smooth();
  // Initialize all objects
  for (i = 0; i < oscillatorsLength; i++) {
    oscillators[i] = new Oscillator();
  }
  background(255);
}

function draw() {
  background(255);
  // Run all objects
  for (i = 0; i < oscillatorsLength; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}
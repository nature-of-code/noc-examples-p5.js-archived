// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Wolfram Cellular Automata

// Simple demonstration of a Wolfram 1-dimensional cellular automata

var ca;

function setup() {
  createCanvas(640, 360);
  background(51);
  ca = new CA();
}

function draw() {
  ca.display();
  if (ca.generation < height/ca.w) {
    ca.generate();
  }
}

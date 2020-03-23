// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let w;

function setup() {
  createCanvas(640,360);
  // Create a walker object
  w = new Walker();
  background(255);
}

function draw() {
  // Run the walker object
  w.step();
  w.render();
}
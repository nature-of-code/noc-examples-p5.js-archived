// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let w;

function setup() {
  createCanvas(200,200);
  // Create a walker object
  w = new Walker();
  background(0);
}

function draw() {
  // Run the walker object
  w.step();
  w.render();
}



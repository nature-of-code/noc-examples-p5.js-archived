// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let w;

function setup() {
  createCanvas(400, 300);
  // Create a walker object
  w = new Walker();
}

function draw() {
  background(255);

  // Run the walker object
  w.step();
  w.render();
}


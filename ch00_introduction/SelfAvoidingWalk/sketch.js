// Daniel Shiffman
// The Nature of Code
// http://www.shiffman.net/

let w;

function setup() {
  createCanvas(600,400);
  // Create a walker object
  w = new Walker();
  background(255);
}

function draw() {
  // Run the walker object
  w.step();
  w.render();
}



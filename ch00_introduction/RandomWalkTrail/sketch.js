// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let w;

function setup() {
  createVector(400,400);
  frameRate(30);

  // Create a walker object
  w = new Walker();

}

function draw() {
  background(255);
  // Run the walker object
  w.walk();
  w.display();
}




// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let w;

function setup() {
  createCanvas(640,360);
  // Create a walker object
  w = new Walker();

}

function draw() {
  background(255);
  // Run the walker object
  w.walk();
  w.display();
}
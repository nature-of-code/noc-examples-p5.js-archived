// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A basic implementation of John Conway's Game of Life CA

// Each cell is now an object!

var gol;

function setup() {
  createCanvas(640, 360);
  gol = new GOL();
}

function draw() {
  background(255);
  gol.generate();
  gol.display();
}

// reset board when mouse is pressed
function mousePressed() {
  gol.init();
}


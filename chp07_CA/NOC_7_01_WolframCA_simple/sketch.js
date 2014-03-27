<<<<<<< HEAD
var ca;


function setup() {
	createGraphics(800, 400);
  	background(255);
  	ca = new CA();
}

function draw() {
  	ca.display();
  	if (ca.generation < height/ca.w) {
    		ca.generate();
  	}
=======
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Wolfram Cellular Automata

// Simple demonstration of a Wolfram 1-dimensional cellular automata

var ca;

function setup() {
  createGraphics(640, 360);
  background(51);
  ca = new CA();
}

function draw() {
  ca.display();
  if (ca.generation < height/ca.w) {
    ca.generate();
  }
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
};


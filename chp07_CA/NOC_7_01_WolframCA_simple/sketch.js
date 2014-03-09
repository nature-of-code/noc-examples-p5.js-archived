// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Wolfram Cellular Automata

// Simple demonstration of a Wolfram 1-dimensional cellular automata

var ca;   // An instance object to describe the Wolfram basic Cellular Automata


function setup() {
	createGraphics(800, 400);
  	background(255);
  	ca = new CA();                 // Initialize CA
}

function draw() {
  	ca.display();    // Draw the CA
  	if (ca.generation < height/ca.w) {
    		ca.generate();
  	}
};


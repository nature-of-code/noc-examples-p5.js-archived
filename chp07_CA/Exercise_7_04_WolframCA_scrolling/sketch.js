<<<<<<< HEAD
var ca;

function setup() {
  	createGraphics(640, 800);
  	setFrameRate(24);
  	background(255);
  	var ruleset = new Array(0,1,0,1,1,0,1,0);
  
  	ca = new CA(ruleset);
}

function draw() {
  	background(255);
  	ca.display();
  	ca.generate();
=======
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Wolfram Cellular Automata

// Simple demonstration of a Wolfram 1-dimensional cellular automata
// with the system scrolling by
// Also implements wrap around

var ca;

function setup() {
  createGraphics(360, 640);
  var ruleset = new Array(0,1,0,1,1,0,1,0);  // Rule 90

  //int[] ruleset = {0,1,1,1,1,0,1,1};   // Rule 222  
  //int[] ruleset = {0,1,1,1,1,1,0,1};   // Rule 190  
  //int[] ruleset = {0,1,1,1,1,0,0,0};   // Rule 30  
  //int[] ruleset = {0,1,1,1,0,1,1,0};   // Rule 110

  ca = new CA(ruleset);
}

function draw() {
  background(51);
  ca.display();
  ca.generate();
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
};

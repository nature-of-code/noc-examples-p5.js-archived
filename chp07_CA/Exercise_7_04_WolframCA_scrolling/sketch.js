// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Wolfram Cellular Automata

// Simple demonstration of a Wolfram 1-dimensional cellular automata
// with the system scrolling by
// Also implements wrap around

// An object to describe a Wolfram elementary Cellular Automata
var ca;

function setup() {
  createCanvas(360, 600);
  var ruleset = new Array(0,1,0,1,1,0,1,0);  // Rule 90

  //int[] ruleset = {0,1,1,1,1,0,1,1};   // Rule 222  
  //int[] ruleset = {0,1,1,1,1,1,0,1};   // Rule 190  
  //int[] ruleset = {0,1,1,1,1,0,0,0};   // Rule 30  
  //int[] ruleset = {0,1,1,1,0,1,1,0};   // Rule 110

  // Initialize CA
  ca = new CA(ruleset);
}

function draw() {
  background(51);
  ca.display();
  ca.generate();
}

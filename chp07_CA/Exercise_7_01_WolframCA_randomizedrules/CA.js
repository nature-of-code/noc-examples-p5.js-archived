// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Wolfram Cellular Automata

// A class to manage the CA
function CA(r) {
	this.w = 5;
  // An array of 0s and 1s
  this.cells = new Array(width/this.w);
  this.generation;
  // An array to store the ruleset, for example [0,1,1,0,1,1,0,1]
	this.ruleset = r;

  // Make a random ruleset
  this.randomize = function() {
  	for (var i = 0; i < 8; i++) {
  		this.ruleset[i] = Math.floor(random(2));
  	}
  };

  // Reset to generation 0
  this.restart = function() {
  	for (var i = 0; i < this.cells.length; i++) {
  		this.cells[i] = 0;
  	}
    // We arbitrarily start with just the middle cell having a state of "1"
  	this.cells[this.cells.length/2] = 1;
  	this.generation = 0;
  };
  this.restart();

  // The process of creating the new generation
  this.generate = function() {
    // First we create an empty array for the new values
    var nextgen = new Array(this.cells.length);
    // For every spot, determine new state by examing current state, and neighbor states
    // Ignore edges that only have one neighor
    for (var i = 1; i < this.cells.length-1; i++) {
      var left = this.cells[i-1];   // Left neighbor state
      var me = this.cells[i];       // Current state
      var right = this.cells[i+1];  // Right neighbor state
      nextgen[i] = this.rules(left, me, right); // Compute next generation state based on ruleset
    }
    // The current generation is the new generation
    this.cells = nextgen;
    this.generation++;
  };

  // This is the easy part, just draw the cells, fill 255 for '1', fill 0 for '0'
  this.display = function() {
  	for (var i = 0; i < this.cells.length; i++) {
  		if (this.cells[i] == 1) fill(200);
  		else                    fill(51);
  		noStroke();
  		rect(i*this.w, this.generation*this.w, this.w, this.w);
  	}
  };

  // Implementing the Wolfram rules
  // This could be condensed probably, here is java way
  /*int rules (int a, int b, int c) {
    String s = "" + a + b + c;
    int index = Integer.parseInt(s, 2);
    return ruleset[index];
  }*/
  this.rules = function(a, b, c) {
  	if (a == 1 && b == 1 && c == 1) return this.ruleset[0];
  	if (a == 1 && b == 1 && c === 0) return this.ruleset[1];
  	if (a == 1 && b === 0 && c == 1) return this.ruleset[2];
  	if (a == 1 && b === 0 && c === 0) return this.ruleset[3];
  	if (a === 0 && b == 1 && c == 1) return this.ruleset[4];
  	if (a === 0 && b == 1 && c === 0) return this.ruleset[5];
  	if (a === 0 && b === 0 && c == 1) return this.ruleset[6];
  	if (a === 0 && b === 0 && c === 0) return this.ruleset[7];
  	return 0;
  };

  // The CA is done if it reaches the bottom of the screen
  this.finished = function() {
  	if (this.generation > height/this.w) {
  		return true;
  	}
  	else {
  		return false;
  	}
  };
}

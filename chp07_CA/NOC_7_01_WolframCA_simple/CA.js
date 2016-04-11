// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Wolfram Cellular Automata

// CA object prototype

function CA() {
  this.w = 10;
  // An array of 0s and 1s
  this.cells = new Array(width/this.w);
  for (var i = 0; i < this.cells.length; i++) {
    this.cells[i] = 0;
  }
   // We arbitrarily start with just the middle cell having a state of "1"
  this.cells[this.cells.length/2] = 1;
  this.generation = 0;

  // An array to store the ruleset, for example {0,1,1,0,1,1,0,1}
    this.ruleset = [0, 1, 0, 1, 1, 0, 1, 0];

  // The process of creating the new generation
  this.generate = function() {
    // First we create an empty array filled with 0s for the new values
    var nextgen = [];
    for (var i = 0; i < this.cells.length; i++) {
      nextgen[i] = 0;
    }
    // For every spot, determine new state by examing current state, and neighbor states
    // Ignore edges that only have one neighor
    for (var i = 1; i < this.cells.length-1; i++) {
      var left   = this.cells[i-1];   // Left neighbor state
      var me     = this.cells[i];     // Current state
      var right  = this.cells[i+1];   // Right neighbor state
      nextgen[i] = this.rules(left, me, right); // Compute next generation state based on ruleset
    }
    // The current generation is the new generation
    this.cells = nextgen;
    this.generation++;
  };

  // This is the easy part, just draw the cells
  this.display = function() {
  	for (var i = 0; i < this.cells.length; i++) {
  		if (this.cells[i] == 1) fill(200);
  		else                    fill(51);
  		noStroke();
  		rect(i*this.w, this.generation*this.w, this.w, this.w);
  	}
  };

  // Implementing the Wolfram rules
  // Could be improved and made more concise, but here we can explicitly see what is going on for each case
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
}

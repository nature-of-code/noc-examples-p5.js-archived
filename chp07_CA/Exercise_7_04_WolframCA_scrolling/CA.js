// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Wolfram Cellular Automata

// A class to manage the CA

function CA(r) {
  // How many generations?
  this.generation = 0;
  // An array to store the ruleset, for example [0,1,1,0,1,1,0,1]
  this.ruleset = r;
  this.w = 4;
  this.cols = width/this.w;
  this.rows = height/this.w;
  // Store a history of generations in 2D array, not just one
  this.matrix = new Array(this.cols);
  for( var i = 0; i < this.cols; i++) {
    this.matrix[i] = new Array(this.rows);
  }

  // Reset to generation 0
  this.restart = function() {
    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        this.matrix[i][j] = 0;
      }
    }
    this.matrix[this.cols/2][0] = 1;    // We arbitrarily start with just the middle cell having a state of "1"
    this.generation = 0;
  };
  this.restart();

    // Make a random ruleset
  this.randomize = function() {
    for (var i = 0; i < 8; i++) {
      this.ruleset[i] = Math.floor(random(2));
    }
  };




  // The process of creating the new generation
  this.generate = function() {

    // For every spot, determine new state by examing current state, and neighbor states
    // Ignore edges that only have one neighor
    for (var i = 0; i < this.cols; i++) {
      var left  = this.matrix[(i+this.cols-1)%this.cols][this.generation%this.rows];   // Left neighbor state
      var me    = this.matrix[i][this.generation%this.rows];       // Current state
      var right = this.matrix[(i+1)%this.cols][this.generation%this.rows];  // Right neighbor state
      this.matrix[i][(this.generation+1)%this.rows] = this.rules(left, me, right); // Compute next generation state based on ruleset
    }
    this.generation++;
  };

  // This is the easy part, just draw the cells, fill 255 for '1', fill 0 for '0'
  this.display = function() {
    var offset = this.generation%this.rows;

    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        var y = j - offset;
        if (y <= 0) y = this.rows + y;
        // Only draw if cell state is 1
        if (this.matrix[i][j] == 1) {
          fill(255);
          noStroke();
          rect(i*this.w, (y-1)*this.w, this.w, this.w);
        }
      }
    }
  };

  // Implementing the Wolfram rules
  // This is the concise conversion to binary way
  this.rules = function(a, b, c) {
    var s = "" + a + b + c;
    var index = parseInt(s, 2);
    return this.ruleset[index];
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

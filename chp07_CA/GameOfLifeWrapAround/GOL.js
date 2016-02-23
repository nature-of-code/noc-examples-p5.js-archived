// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function GOL() {

  this.w = 8;
  this.columns = width/this.w;
  this.rows = height/this.w;
  this.board = new Array(this.columns);
  for (var i = 0; i < this.columns; i++) {
    this.board[i] = new Array(this.rows);
  }

  this.init = function() {
    for (var i =0;i < this.columns;i++) {
      for (var j =0;j < this.rows;j++) {
        this.board[i][j] = Math.floor(random(2));
      }
    }
  };
  this.init();

  // The process of creating the new generation
  this.generate = function() {

    var next = new Array(this.columns);
    for (var i = 0; i < this.columns; i++) {
      next[i] = new Array(this.rows);
    }

    // Loop through every spot in our 2D array and check spots neighbors
    for (var x = 0; x < this.columns; x++) {
      for (var y = 0; y < this.rows; y++) {
        // Add up all the states in a 3x3 surrounding grid
        var neighbors = 0;

        for (var i = -1; i <= 1; i++) {
          for (var j = -1; j <= 1; j++) {
            neighbors += this.board[(x+i+this.columns)%this.columns][(y+j+this.rows)%this.rows];
          }
        }

        // A little trick to subtract the current cell's state since
        // we added it in the above loop
        neighbors -= this.board[x][y];

        // Rules of Life
        if      ((this.board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
        else if ((this.board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
        else if ((this.board[x][y] === 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
        else                                            next[x][y] = this.board[x][y];  // Stasis
      }
    }

    // Next is now our board
    this.board = next;
  };

  // This is the easy part, just draw the cells, fill 255 for '1', fill 0 for '0'
  this.display = function() {
    for ( var i = 0; i < this.columns;i++) {
      for ( var j = 0; j < this.rows;j++) {
        if ((this.board[i][j] == 1)) fill(0);
        else fill(255);
        stroke(0);
        rect(i*this.w, j*this.w, this.w, this.w);
      }
    }
  };
}

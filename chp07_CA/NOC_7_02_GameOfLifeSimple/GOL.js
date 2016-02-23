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
  // Going to use multiple 2D arrays and swap them
  this.next = new Array(this.columns);
  for (var i = 0; i < this.columns; i++) {
    this.next[i] = new Array(this.rows);
  }
  this.init = function() {
    for (var i =0;i < this.columns;i++) {
      for (var j =0;j < this.rows;j++) {
        // Lining the edges with 0s
        if (i === 0 || j === 0 || i == this.columns-1 || j == this.rows-1) this.board[i][j] = 0;
        // Filling the rest randomly
        else this.board[i][j] = Math.floor(random(2));
        this.next[i][j] = 0;
      }
    }
  };

  this.init();

  // The process of creating the new generation
  this.generate = function() {


    // Loop through every spot in our 2D array and check spots neighbors
    for (var x = 1; x < this.columns-1; x++) {
      for (var y = 1; y < this.rows-1; y++) {
        // Add up all the states in a 3x3 surrounding grid
        var neighbors = 0;

        for (var i = -1; i <= 1; i++) {
          for (var j = -1; j <= 1; j++) {
            neighbors += this.board[x+i][y+j];
          }
        }

        // A little trick to subtract the current cell's state since
        // we added it in the above loop
        neighbors -= this.board[x][y];

        // Rules of Life
        if      ((this.board[x][y] == 1) && (neighbors <  2)) this.next[x][y] = 0;           // Loneliness
        else if ((this.board[x][y] == 1) && (neighbors >  3)) this.next[x][y] = 0;           // Overpopulation
        else if ((this.board[x][y] === 0) && (neighbors == 3)) this.next[x][y] = 1;           // Reproduction
        else                                            this.next[x][y] = this.board[x][y];  // Stasis
      }
    }

    // Swap!
    var temp = this.board;
    this.board = this.next;
    this.next = temp;
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

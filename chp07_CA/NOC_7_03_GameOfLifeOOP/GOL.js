function GOL() {

  	this.w = 8;
  	this.columns = width/this.w;
	this.rows = height/this.w;
	this.board = new Array(this.columns);
	for (var i = 0; i < this.columns; i++) {
		this.board[i] = new Array(this.rows);
	}
    	this.init();
}

GOL.prototype.init = function() {
    	for (var i = 0; i < this.columns; i++) {
      		for (var j = 0; j < this.rows; j++) {
        		this.board[i][j] = new Cell(i*this.w, j*this.w, this.w);
      		}
    	}
}

GOL.prototype.generate = function() {
     	for ( var i = 0; i < this.columns;i++) {
      		for ( var j = 0; j < this.rows;j++) {
        		this.board[i][j].savePrevious();
      		}
    	}
    
    	for (var x = 0; x < this.columns; x++) {
      		for (var y = 0; y < this.rows; y++) {
        		var neighbors = 0;
        		for (var i = -1; i <= 1; i++) {
        			for (var j = -1; j <= 1; j++) {
            				neighbors += this.board[(x+i+this.columns)%this.columns][(y+j+this.rows)%this.rows].previous;
				}
       			}
        
			neighbors -= this.board[x][y].previous;

        		if      ((this.board[x][y].state == 1) && (neighbors <  2)) this.board[x][y].newState(0);
        		else if ((this.board[x][y].state == 1) && (neighbors >  3)) this.board[x][y].newState(0);
        		else if ((this.board[x][y].state == 0) && (neighbors == 3)) this.board[x][y].newState(1);
      		}
    	}
}

GOL.prototype.display = function() {
    	for ( var i = 0; i < this.columns;i++) {
      		for ( var j = 0; j < this.rows;j++) {
        		this.board[i][j].display();
      		}
    	}
}


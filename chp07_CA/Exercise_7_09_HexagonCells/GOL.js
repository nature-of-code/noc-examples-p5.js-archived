function GOL() {
  	this.w = 20;
  	this.h = sin(radians(60))*this.w;
  	this.columns = Math.floor(width/this.w*3);
  	this.rows = Math.floor(height/this.h);
  
  	this.board = new Array(this.columns);
  	for(var i = 0; i < this.columns; i++) {
		this.board[i] = new Array(this.rows);
  	}
    	this.init();
}

GOL.prototype.init = function() {
    	var h = sin(radians(60))*this.w;
    	for (var i = 0; i < this.columns; i++) {
      		for (var j = 0; j < this.rows; j++) {
        		if (j % 2 == 0) this.board[i][j] = new Cell(i*this.w*3, j*h,this.w);
        		else this.board[i][j] = new Cell(i*this.w*3+this.w+h/2, j*h, this.w);
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


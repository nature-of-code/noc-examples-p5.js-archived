function CA(r) {
	this.generation;
  this.ruleset = r;
  this.w = 4;
	this.cols = width/this.w;;
  this.rows = height/this.w;
  this.matrix = new Array(this.cols);
  for( var i = 0; i < this.cols; i++) {
		this.matrix[i] = new Array(this.rows);
  }
  this.restart();
}

CA.prototype.randomize = function() {
	for (var i = 0; i < 8; i++) {
		this.ruleset[i] = Math.floor(random(2));
	}
}

CA.prototype.restart = function() {
	for (var i = 0; i < this.cols; i++) {
		for (var j = 0; j < this.rows; j++) {
  		this.matrix[i][j] = 0;
		}
	}
	this.matrix[this.cols/2][0] = 1;
	this.generation = 0;
}

CA.prototype.generate = function() {
	for (var i = 0; i < this.cols; i++) {
		var left  = this.matrix[(i+this.cols-1)%this.cols][this.generation%this.rows];
		var me    = this.matrix[i][this.generation%this.rows];
		var right = this.matrix[(i+1)%this.cols][this.generation%this.rows];
		this.matrix[i][(this.generation+1)%this.rows] = this.rules(left, me, right);
	}
	this.generation++;
}

CA.prototype.display = function() {
  var offset = this.generation%this.rows;

 	for (var i = 0; i < this.cols; i++) {
		for (var j = 0; j < this.rows; j++) {
  		var y = j - offset;
  		if (y <= 0) y = this.rows + y;
  		if (this.matrix[i][j] == 1) {
  			fill(200);
  			noStroke();
  			rect(i*this.w, (y-1)*this.w, this.w, this.w);
  		}
		}
	}
}

CA.prototype.rules = function(a, b, c) {
  	var s = "" + a + b + c;
  	var index = parseInt(s, 2);
  	return this.ruleset[index];
}

CA.prototype.finished = function() {
  	if (this.generation > height/this.w) {
    	return true;
  	} 
  	else {
    	return false;
  	}
}


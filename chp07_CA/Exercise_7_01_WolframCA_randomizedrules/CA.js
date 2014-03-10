function CA(r) {
	this.w = 5;
  	this.cells = new Array(width/this.w);
  	this.generation;
	this.ruleset = r;
    	this.restart();
}

CA.prototype.randomize = function() {
    	for (var i = 0; i < 8; i++) {
      		this.ruleset[i] = Math.floor(random(2));
    	}
}

CA.prototype.restart = function() {
    	for (var i = 0; i < this.cells.length; i++) {
      		this.cells[i] = 0;
    	}
    	this.cells[this.cells.length/2] = 1;
    	this.generation = 0;
}

CA.prototype.generate = function() {
    	var nextgen = new Array(this.cells.length);
    	for (var i = 1; i < this.cells.length-1; i++) {
      		var left = this.cells[i-1];
      		var me = this.cells[i];
      		var right = this.cells[i+1];
      		nextgen[i] = this.rules(left, me, right);
    	}
    	this.cells = nextgen;
    	this.generation++;
}

CA.prototype.display = function() {
    	for (var i = 0; i < this.cells.length; i++) {
      		if (this.cells[i] == 1) fill(0);
      		else               fill(255);
      		noStroke();
      		rect(i*this.w, this.generation*this.w, this.w, this.w);
    	}
}

CA.prototype.rules = function(a, b, c) {
    	if (a == 1 && b == 1 && c == 1) return this.ruleset[0];
    	if (a == 1 && b == 1 && c == 0) return this.ruleset[1];
    	if (a == 1 && b == 0 && c == 1) return this.ruleset[2];
    	if (a == 1 && b == 0 && c == 0) return this.ruleset[3];
    	if (a == 0 && b == 1 && c == 1) return this.ruleset[4];
    	if (a == 0 && b == 1 && c == 0) return this.ruleset[5];
    	if (a == 0 && b == 0 && c == 1) return this.ruleset[6];
    	if (a == 0 && b == 0 && c == 0) return this.ruleset[7];
    	return 0;
}

CA.prototype.finished = function() {
    	if (this.generation > height/this.w) {
      		return true;
    	} 
    	else {
      		return false;
    	}
}


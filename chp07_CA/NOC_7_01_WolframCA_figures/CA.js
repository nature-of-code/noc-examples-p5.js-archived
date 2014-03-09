function CA(r) {

  	this.cells = new Array(width/scl);
  	this.generation;
  	this.ruleset = r;
    	this.restart();
}

/*function CA() {
	this.scl = 1;
    	this.cells = new Array(width/this.scl);
    	this.randomize();
    	this.restart();
}*/

CA.prototype.setRules = function(r) {
    	this.ruleset = r;
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

CA.prototype.render = function() {
    	for (var i = 0; i < this.cells.length; i++) {
      		if (this.cells[i] == 1) fill(0);
      		else               fill(255);
      		stroke(0);
      		rect(i*scl, this.generation*scl, scl, scl);
    	}
}

CA.prototype.rules = function(a, b, c) {
    	var s = "" + a + b + c;
    	var index = parseInt(s,2);
    	return this.ruleset[index];
}

CA.prototype.finished = function() {
    	if (this.generation > height/scl) {
      		return true;
    	} 
    	else {
      		return false;
    	}
}


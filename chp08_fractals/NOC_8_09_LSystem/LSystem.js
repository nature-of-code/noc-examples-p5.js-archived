
function LSystem(axiom, r) {
	
	this.sentence = axiom;
	this.ruleset = r;
  	this.generation = 0;
}

LSystem.prototype.generate = function() {
	var nextgen = [];
	for (var i = 0; i < this.sentence.length; i++) {
		var curr = this.sentence.charAt(i);
		var replace = "" + curr;
		for (var j = 0; j < this.ruleset.length; j++) {
        		var a = this.ruleset[j].getA();
			if (a == curr) {
          			replace = this.ruleset[j].getB();
          			break; 
        		}
      		}
      		nextgen.push(replace);
    	}
    	this.sentence = nextgen.toString();
    	this.generation++;
}

LSystem.prototype.getSentence = function() {
    	return this.sentence;
}

LSystem.prototype.getGeneration = function() {
    	return this.generation;
}

function DNA(newgenes) {
	if (typeof newgenes == "undefined") {
		this.genes = new Array(lifetime);
		//console.log("undefined");
		this.maxforce = 0.1;
		for (var i = 0; i < this.genes.length; i++) {
			var angle = random(TWO_PI);
			this.genes[i] = new PVector(cos(angle), sin(angle));
			this.genes[i].mult(random(0, this.maxforce));
    		}
	}
	else {	this.genes = new Array(newgenes); 
		//console.log("defined");
	}
}
DNA.prototype.crossover = function(partner) {
    	var child = new Array(this.genes.length);
    	var crossover = Math.floor(random(this.genes.length));
    	for (var i = 0; i < this.genes.length; i++) {
      		if (i > crossover) child[i] = this.genes[i];
      		else               child[i] = partner.genes[i];
    	}    
    	var newgenes = new DNA(child);
    	return newgenes;
}

DNA.prototype.mutate = function(m) {
	for (var i = 0; i < this.genes.length; i++) {
		if (random(1) < m) {
        		var angle = random(TWO_PI);
       			this.genes[i] = new PVector(cos(angle), sin(angle));
        		this.genes[i].mult(random(0, this.maxforce));
      		}
    	}
}


function DNA(newgenes) {
	this.len = 20;
	if(typeof newgenes == "undefined") {
		this.genes = new Array(this.len);
		for (var i = 0; i < this.genes.length; i++) {
      			this.genes[i] = random(0,1);
		}
	} else {
		this.genes = newgenes;
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
         		this.genes[i] = random(0,1);
      		}
    	}
}

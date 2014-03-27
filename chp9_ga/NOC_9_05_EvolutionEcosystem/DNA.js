function DNA(newgenes) {
	if (typeof newgenes == "undefined") {
	  	this.genes = new Array(1);
    		for (var i = 0; i < this.genes.length; i++) {
      			this.genes[i] = random(0,1);
    		}
	} else {
		this.genes = newgenes;
	}
}

DNA.prototype.copy = function() {
    	var newgenes = new Array(this.genes.length);
    	for (var i = 0; i < newgenes.length; i++) {
      		newgenes[i] = genes[i];
    	}
    	return new DNA(newgenes);
}

DNA.prototype.mutate = function(m) {
    	for (var i = 0; i < this.genes.length; i++) {
      		if (random(1) < m) {
         		this.genes[i] = random(0,1);
      		}
    	}
}

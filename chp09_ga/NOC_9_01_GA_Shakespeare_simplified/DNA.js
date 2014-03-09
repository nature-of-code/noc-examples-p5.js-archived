function DNA(num) {

  	this.genes = new Array();
  
  	this.fitness;
	for (var i = 0; i < num; i++) {
      		this.genes[i] = String.fromCharCode(random(32,128));
    	}
}

DNA.prototype.getPhrase = function() {
	return this.genes.join("");
}
  

DNA.prototype.calcFitness = function(target) {
	var score = 0;
	for (var i = 0; i < this.genes.length; i++) {
		if (this.genes[i] == target.charAt(i)) {
          		score++;
        	}
     	}
     	this.fitness = parseFloat(score) / parseFloat(target.length);
  }
  
DNA.prototype.crossover = function(partner) {
    	var child = new DNA(this.genes.length);
    
    	var midpoint = Math.floor(random(this.genes.length));
    	for (var i = 0; i < this.genes.length; i++) {
      		if (i > midpoint) child.genes[i] = this.genes[i];
      		else child.genes[i] = partner.genes[i];
    	}
    	return child;
}
  
DNA.prototype.mutate = function(mutationRate) {
    	for (var i = 0; i < this.genes.length; i++) {
      		if (random(1) < mutationRate) {
        		this.genes[i] = String.fromCharCode(random(32,128));
      		}
    	}
}

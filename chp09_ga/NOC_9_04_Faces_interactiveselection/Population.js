function Population(m, num) {

  	this.mutationRate = m;
  	this.population = new Array(num);
  	this.matingPool = new Array();
  	this.generations = 0;
  	for (var i = 0; i < this.population.length; i++) {
		this.population[i] = new Face(new DNA(), 50+i*75, 60);
  	}
}

Population.prototype.display = function() {
    	for (var i = 0; i < this.population.length; i++) {
      		this.population[i].display();
    	}
}

Population.prototype.rollover = function(mx, my) {
    	for (var i = 0; i < this.population.length; i++) {
      		this.population[i].rollover(mx, my);
    	}
}

Population.prototype.selection = function() {
    	this.matingPool.length = 0;
    	maxFitness = this.getMaxFitness();
    	for (var i = 0; i < this.population.length; i++) {
      		var fitnessNormal = map(this.population[i].getFitness(), 0, maxFitness, 0, 1);
      		var n = Math.floor(fitnessNormal * 100);
      		for (var j = 0; j < n; j++) {
        		this.matingPool.push(this.population[i]);
      		}
    	}
}  

Population.prototype.reproduction = function() {
    	for (var i = 0; i < this.population.length; i++) {
      		var m = Math.floor(random(this.matingPool.length));
      		var d = Math.floor(random(this.matingPool.length));
      		var mom = this.matingPool[m];
      		var dad = this.matingPool[d];
      		var momgenes = mom.getDNA();
      		var dadgenes = dad.getDNA();
      		var child = momgenes.crossover(dadgenes);
      		child.mutate(this.mutationRate);
      		this.population[i] = new Face(child, 50+i*75, 60);
    	}
    	this.generations++;
}

Population.prototype.getGenerations = function() {
    return this.generations;
}

Population.prototype.getMaxFitness = function() {
    	var record = 0;
    	for (var i = 0; i < this.population.length; i++) {
      		if (this.population[i].getFitness() > record) {
        		record = this.population[i].getFitness();
      		}
    	}
    	return record;
}


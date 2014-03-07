function Population(p, m, num) {
	this.mutationRate = m;
  	this.population = new Array(num);
  	this.matingPool = new Array();
  	this.target = p;
  	this.generations = 0;
  	this.finished = false;
  	this.perfectScore = 1;
	for (var i = 0; i < this.population.length; i++) {
      		this.population[i] = new DNA(this.target.length);
    	}
    	this.calcFitness();
}

Population.prototype.calcFitness = function() {
    	for (var i = 0; i < this.population.length; i++) {
      		this.population[i].fitness(this.target);
    	}
}

Population.prototype.naturalSelection = function() {
	this.matingPool.length = 0;
    	var maxFitness = 0;
    	for (var i = 0; i < this.population.length; i++) {
      		if (this.population[i].fitness > maxFitness) {
        		maxFitness = this.population[i].fitness;
      		}
    	}
    	for (var i = 0; i < this.population.length; i++) {
		var fitness = map(this.population[i].fitness,0,maxFitness,0,1);
		var n = Math.floor(fitness * 100); 
      		for (var j = 0; j < n; j++) {
        		this.matingPool.push(this.population[i]);
      		}
    	}
}

Population.prototype.generate = function() {
	for (var i = 0; i < this.population.length; i++) {
      		var a = Math.floor(random(this.matingPool.length));
      		var b = Math.floor(random(this.matingPool.length));
      		var partnerA = this.matingPool[a];
		var partnerB = this.matingPool[b];
      		var child = partnerA.crossover(partnerB);
      		child.mutate(this.mutationRate);
      		this.population[i] = child;
    	}
    	this.generations++;
}

Population.prototype.getBest = function() {
    	var worldrecord = 0;
    	var index = 0;
    	for (var i = 0; i < this.population.length; i++) {
      		if (this.population[i].fitness > worldrecord) {
        		index = i;
        		worldrecord = this.population[i].fitness;
      		}
    	}
    
    	if (worldrecord == this.perfectScore ) this.finished = true;
    	return this.population[index].getPhrase();
}

Population.prototype.finished = function() {
    	return this.finished;
}

Population.prototype.getGenerations = function() {
    	return this.generations;
}

Population.prototype.getAverageFitness = function() {
    	var total = 0;
    	for (var i = 0; i < this.population.length; i++) {
      		total += this.population[i].fitness;
    	}
    	return total / (this.population.length);
}

Population.prototype.allPhrases = function() {
    	var everything = "";
    
    	var displayLimit = min(this.population.length,50);
    	for (var i = 0; i < displayLimit; i++) {
      		everything += this.population[i].getPhrase() + "\n";
    	}
    	return everything;
}

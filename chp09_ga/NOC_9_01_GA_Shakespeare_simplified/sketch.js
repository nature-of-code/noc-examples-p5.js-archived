var mutationRate = 0.01;
var totalPopulation = 150;

var population = new Array(totalPopulation);
var matingPool;
var target;

function setup() {
  	createGraphics(700, 200);
  	target = "to be or not to be";

	for (var i = 0; i < population.length; i++) {
    		population[i] = new DNA(target.length);
  	}
}

function draw() {
  	for (var i = 0; i < population.length; i++) {
    		population[i].calcFitness(target);
	}

	var matingPool = [];

  	for (var i = 0; i < population.length; i++) {
    		var nnnn = Math.floor(population[i].fitness * 100);
    		for (var j = 0; j <nnnn; j++) {
      			matingPool.push(population[i]);
    		}
  	}

  	for (var i = 0; i < population.length; i++) {
    		var a = Math.floor(random(matingPool.length));
    		var b = Math.floor(random(matingPool.length));
		var partnerA = matingPool[a];
    		var partnerB = matingPool[b];
    		var child = partnerA.crossover(partnerB);
    		child.mutate(mutationRate);
    		population[i] = child;
  	}
  
  	background(255);
  	fill(0);
  	var everything = "";
  	for (var i = 0; i < population.length; i++) {
    		everything +=population[i].getPhrase() + "  ";
  	}
	textFont("Courier");
  	text(everything,10,10,width,height);
	//println(everything);
};


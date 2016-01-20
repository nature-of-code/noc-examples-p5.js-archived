// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A class to describe a population of "creatures"



// Initialize the population
function Population(m, num) {
  this.mutationRate = m;              // Mutation rate
  this.population = new Array(num);   // Array to hold the current population
  this.darwin = [];                   // Array which we will use for our "mating pool"
  this.generations = 0;               // Number of generations
  //make a new set of creatures
  for (var i = 0; i < this.population.length; i++) {
    this.population[i] = new Rocket(start.position, new DNA(dnasize));
  }
  this.order = 1;  // Keep track of the order of creature's finishing the maze
                   // The first one to finish will be #1

  this.live = function(obstacles) {
    var record = 100000;
    var closest = 0;

    // For every creature
    for (var i = 0; i < this.population.length; i++) {
      // If it finishes, mark it down as done!
      if ((this.population[i].finished())) {
        this.population[i].setFinish(order);
        this.order++;
      }
      // Run it
      this.population[i].run(obstacles);

      if (this.population[i].recordDist < record) {// && !population[i].dead) {
        record = this.population[i].recordDist;
        closest = i;
      }
    }
    this.population[closest].highlight();
    // Drawing one example of the DNA
    if (debug) {
      this.population[closest].dna.debugDraw();
    }
  }

  // Did anything finish?
  this.targetReached = function() {
    for (var i = 0; i < population.length; i++) {
      if (this.population[i].finished()) return true;
    }
    return false;
  }

  // Calculate fitness for each creature
  this.calcFitness = function() {
   for (var i = 0; i < this.population.length; i++) {
      this.population[i].calcFitness();
    }
    this.order = 1;  // Hmmm, awkward place for this, we have to reset this for the next generation
  }

  // Generate a mating pool
  this.naturalSelection = function() {
    // Clear the ArrayList
    darwin = [];

    // Calculate total fitness of whole population
    var totalFitness = this.getTotalFitness();
    var avgFitness = totalFitness/this.population.length;
    // Calculate normalized fitness for each member of the population
    // Based on normalized fitness, each member will get added to the mating pool a certain number of times a la roulette wheel
    // A higher fitness = more entries to mating pool = more likely to be picked as a parent
    // A lower fitness = fewer entries to mating pool = less likely to be picked as a parent
    var count = 0;
    for (var i = 0; i < this.population.length; i++) {
      var fitness = this.population[i].getFitness();
      //if (fitness > avgFitness) {
      this.count++;
      var fitnessNormal = fitness / totalFitness;
      var n =floor(fitnessNormal * 50000);  // Arbitrary multiplier, consider mapping fix
      for (var j = 0; j < n; j++) {
        this.darwin.push(this.population[i]);
      }
      //}
    }
    //println("Total: " + count + " " + population.length);
  }

  // Making the next generation
  this.generate = function() {
    // Refill the population with children from the mating pool
    for (var i = 0; i < this.population.length; i++) {
      var m = floor(random(this.darwin.length));
      var d = floor(random(this.darwin.length));
      // Pick two parents
      var mom = this.darwin[m];
      var dad = this.darwin[d];
      // Get their genes
      var momgenes = mom.getDNA();
      var dadgenes = dad.getDNA();
      // Mate their genes
      var child = momgenes.crossover(dadgenes);
      // Mutate their genes
      child.mutate(this.mutationRate);
      // Fill the new population with the new child
      var position = start.position.copy();
      this.population[i] = new Rocket(position, child);
    }
    this.generations++;
  }

  this.getGenerations = function() {
    return this.generations;
  }

  //compute total fitness for the population
  this.getTotalFitness = function() {
    var total = 0;
    for (var i = 0; i < this.population.length; i++) {
      total += this.population[i].getFitness();
    }
    return total;
  }
}


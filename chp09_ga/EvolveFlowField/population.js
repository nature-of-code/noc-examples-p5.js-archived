// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A class to describe a population of "creatures"



// Initialize the population
class Population {
  constructor(m, num) {
    this.mutationRate = m; // Mutation rate
    this.population = new Array(num); // Array to hold the current population
    this.darwin = []; // Array which we will use for our "mating pool"
    this.generations = 0; // Number of generations
    //make a new set of creatures
    for (let i = 0; i < this.population.length; i++) {
      this.population[i] = new Rocket(start.position, new DNA(dnasize));
    }
    this.order = 1; // Keep track of the order of creature's finishing the maze
    // The first one to finish will be #1
  }

  live(obstacles) {
    let record = 100000;
    let closest = 0;

    // For every creature
    for (let i = 0; i < this.population.length; i++) {
      // If it finishes, mark it down as done!
      if ((this.population[i].finished())) {
        this.population[i].setFinish(this.order);
        this.order++;
      }
      // Run it
      this.population[i].run(obstacles);

      if (this.population[i].recordDist < record) { // && !population[i].dead) {
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
  targetReached() {
    for (let i = 0; i < population.length; i++) {
      if (this.population[i].finished()) return true;
    }
    return false;
  }

  // Calculate fitness for each creature
  calcFitness() {
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].calcFitness();
    }
    this.order = 1; // Hmmm, awkward place for this, we have to reset this for the next generation
  }

  // Generate a mating pool
  naturalSelection() {
    // Clear the ArrayList
    this.darwin = [];

    // Calculate total fitness of whole population
    let totalFitness = this.getTotalFitness();
    let avgFitness = totalFitness / this.population.length;
    // Calculate normalized fitness for each member of the population
    // Based on normalized fitness, each member will get added to the mating pool a certain number of times a la roulette wheel
    // A higher fitness = more entries to mating pool = more likely to be picked as a parent
    // A lower fitness = fewer entries to mating pool = less likely to be picked as a parent
    let count = 0;
    for (let i = 0; i < this.population.length; i++) {
      let fitness = this.population[i].getFitness();
      //if (fitness > avgFitness) {
      this.count++;
      let fitnessNormal = fitness / totalFitness;
      let n = floor(fitnessNormal * 50000); // Arbitrary multiplier, consider mapping fix
      for (let j = 0; j < n; j++) {
        this.darwin.push(this.population[i]);
      }
      //}
    }
    //println("Total: " + count + " " + population.length);
  }

  // Making the next generation
  generate() {
    // Refill the population with children from the mating pool
    for (let i = 0; i < this.population.length; i++) {
      let m = floor(random(this.darwin.length));
      let d = floor(random(this.darwin.length));
      // Pick two parents
      let mom = this.darwin[m];
      let dad = this.darwin[d];
      // Get their genes
      let momgenes = mom.getDNA();
      let dadgenes = dad.getDNA();
      // Mate their genes
      let child = momgenes.crossover(dadgenes);
      // Mutate their genes
      child.mutate(this.mutationRate);
      // Fill the new population with the new child
      let position = start.position.copy();
      this.population[i] = new Rocket(position, child);
    }
    this.generations++;
  }

  getGenerations() {
    return this.generations;
  }

  //compute total fitness for the population
  getTotalFitness() {
    let total = 0;
    for (let i = 0; i < this.population.length; i++) {
      total += this.population[i].getFitness();
    }
    return total;
  }
}
class CA {
  constructor() {
    // the width of each cell
    this.w = 10;

    // all cells start with state 0, except the center cell has state 1
    this.cells = new Array(width / this.w).fill(0);
    this.cells[this.cells.length / 2] = 1;

    // keep track of generations
    this.generation = 0;

    // rule 90 in Wolfram's CA
    this.ruleSet = [0, 1, 0, 1, 1, 0, 1, 0];
  }

  generate() {
    // an array to store the state for the next generation
    let nextGen = new Array(this.cells.length).fill(0);

    // update generation
    for (let i = 1; i < this.cells.length - 1; i++) {
      // look at the states from the current array
      let left = this.cells[i - 1];
      let middle = this.cells[i];
      let right = this.cells[i + 1];

      // create a new generation from a rule
      nextGen[i] = this.rules(left, middle, right);

      // the new generation becomes the current generation
    }
    this.cells = nextGen;
    this.generation++;
  }

  // look up a new state from the ruleset
  rules(a, b, c) {
    // join three bits into a string
    let s = "" + a + b + c;

    // translate binary into a index in the ruleset
    let index = parseInt(s, 2);

    // return a new state from the rule in the ruleset
    return this.ruleSet[index];
  }

  display() {
    // call restart() when the last generation reaches the edge of the canvas
    if (this.generation * this.w >= height) {
      this.restart();
    }
    for (let i = 0; i < this.cells.length; i++) {
      // 0 -> white, 1 -> black
      if (this.cells[i] === 1) fill(0);
      else fill(255);
      // display each generation
      rect(i * this.w, this.generation * this.w, this.w, this.w);
    }
  }
  // randomize the states of cells and reset generation counter
  restart() {
    this.cells = new Array(width / this.w)
      .fill(0)
      .map((elem) => Math.round(Math.random()));
    this.generation = 0;
  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

var population;

function setup() {
  createCanvas(800,200);
  colorMode(RGB,1.0);
  var popmax = 10;
  var mutationRate = 0.05;  // A pretty high mutation rate here, our population is rather small we need to enforce variety
  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(mutationRate,popmax);
  // A simple button class
  button = createButton("evolve new generation");
  button.mousePressed(nextGen);
}

function draw() {
  background(0.8);
  // Display the faces
  population.display();
  population.rollover(mouseX,mouseY);
  // Display some text
  textAlign(LEFT);
  fill(0);
  text("Generation #:" + population.getGenerations(),15,190);
}

// If the button is clicked, evolve next generation
function nextGen() {
  population.selection();
  population.reproduction();
}
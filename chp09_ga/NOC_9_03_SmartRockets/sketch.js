// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Smart Rockets w/ Genetic Algorithms

// Each Rocket's DNA is an array of PVectors
// Each PVector acts as a force for each frame of animation
// Imagine an booster on the end of the rocket that can povar in any direction
// and fire at any strength every frame

// The Rocket's fitness is a function of how close it gets to the target as well as how fast it gets there

// This example is inspired by Jer Thorp's Smart Rockets
// http://www.blprnt.com/smartrockets/

var lifetime;  // How long should each generation live

var population;  // Population

var lifecycle;          // Timer for cycle of generation
var recordtime;         // Fastest time to target

var target;        // Target position

//var diam = 24;          // Size of target

var obstacles = [];  //an array list to keep track of all the obstacles!

function setup() {
  createCanvas(640, 360);
  // The number of cycles we will allow a generation to live
  lifetime = 300;

  // Initialize variables
  lifecycle = 0;
  recordtime = lifetime;

  target = new Obstacle(width/2-12, 24, 24, 24);

  // Create a population with a mutation rate, and population max
  var mutationRate = 0.01;
  population = new Population(mutationRate, 50);

  // Create the obstacle course
  obstacles = [];
  obstacles.push(new Obstacle(width/2-100, height/2, 200, 10));
}

function draw() {
  background(127);

  // Draw the start and target positions
  target.display();


  // If the generation hasn't ended yet
  if (lifecycle < lifetime) {
    population.live(obstacles);
    if ((population.targetReached()) && (lifecycle < recordtime)) {
      recordtime = lifecycle;
    }
    lifecycle++;
    // Otherwise a new generation
  }
  else {
    lifecycle = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }

  // Draw the obstacles
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].display();
  }

  // Display some info
  fill(0);
  noStroke();
  text("Generation #: " + population.getGenerations(), 10, 18);
  text("Cycles left: " + (lifetime-lifecycle), 10, 36);
  text("Record cycles: " + recordtime, 10, 54);


}

// Move the target if the mouse is pressed
// System will adapt to new target
function mousePressed() {
  target.position.x = mouseX;
  target.position.y = mouseY;
  recordtime = lifetime;
}

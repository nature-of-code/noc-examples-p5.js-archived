// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Forces (Gravity and Fluid Resistence) with Vectors 
 
// Demonstration of multiple force acting on bodies (Mover class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

// Five moving bodies
var movers = [];

// Liquid
var liquid;

function setup() {
<<<<<<< HEAD
=======
  // Must be before createGraphics
  var text = createHTML("click mouse to reset");

>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
  createGraphics(640, 360);
  reset();
  // Create liquid object
  liquid = new Liquid(0, height/2, width, height/2, 0.1);
<<<<<<< HEAD
=======

  // Here we call methods of each element to set the position and id, try changing these values.
  text.position(10, 365);

>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
}

function draw() {
  background(127);
  
  // Draw water
  liquid.display();

  for (var i = 0; i < movers.length; i++) {
    
    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      var dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }

    // Gravity is scaled by mass here!
    var gravity = new PVector(0, 0.1*movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity);
   
    // Update and display
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
  
<<<<<<< HEAD
  fill(255); // Fill not working for text?
  text("click mouse to reset", 10, 30);
  
=======
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
}


// Not working???
function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (var i = 0; i < 9; i++) {
    movers[i] = new Mover(random(0.5, 3), 40+i*70, 0);
  }
}







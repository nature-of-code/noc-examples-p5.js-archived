// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
let world;

// A list we'll use to track fixed objects
let boundaries = [];

// Just a single box this time
let box;

// The Spring that will attach to the box from the mouse
let spring;


function setup() {
  createCanvas(640, 360);

  // Initialize box2d physics and create the world
  world = createWorld();

  // Make the box
  box = new Box(width / 2, height / 2);

  // Make the spring (it doesn't really get initialized until the mouse is clicked)
  spring = new Spring();

  // Add a bunch of fixed boundaries
  boundaries.push(new Boundary(width / 2, height - 5, width, 10, 0));
  boundaries.push(new Boundary(width / 2, 5, width, 10, 0));
  boundaries.push(new Boundary(width - 5, height / 2, 10, height, 0));
  boundaries.push(new Boundary(5, height / 2, 10, height, 0));

}

function draw() {
  background(51);

  // We must always step through time!
  let timeStep = 1.0 / 30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep, 10, 10);

  // Always alert the spring to the new mouse position
  spring.update(mouseX, mouseY);

  // Draw the boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }

  // Draw the box
  box.display();
  // Draw the spring (it only appears when active)
  spring.display();
}

// When the mouse is released we're done with the spring
function mouseReleased() {
  spring.destroy();
}

// When the mouse is pressed we. . .
function mousePressed() {
  // Check to see if the mouse was clicked on the box
  if (box.contains(mouseX, mouseY)) {
    // And if so, bind the mouse position to the box with a spring
    spring.bind(mouseX, mouseY, box);
  }
}
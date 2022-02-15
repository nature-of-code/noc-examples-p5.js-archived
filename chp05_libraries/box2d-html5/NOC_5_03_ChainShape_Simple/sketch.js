// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
let world;

// A list for all of our particles
let particles = [];

// An object to store information about the uneven surface
let surface;

function setup() {
  createCanvas(640, 360);

  // Initialize box2d physics and create the world
  world = createWorld();

  // Create the surface
  surface = new Surface();
}

function draw() {
  background(51);

  // We must always step through time!
  let timeStep = 1.0 / 30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep, 10, 10);

  // particles fall from the top every so often
  if (random(1) < 0.5) {
    let sz = random(4, 8);
    particles.push(new Particle(width / 2, 10, sz));
  }

  // Draw the surface
  surface.display();

  // Display all the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].display();
    if (particles[i].done()) {
      particles.splice(i, 1);
    }
  }
}
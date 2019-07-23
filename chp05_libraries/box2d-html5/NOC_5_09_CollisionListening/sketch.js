// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A reference to our box2d world
let world;

// A list for all of our particles
let particles = [];

let wall;

function setup() {
  createCanvas(640, 360);

  // Initialize box2d physics and create the world
  world = createWorld();

  world.SetContactListener(new CustomListener());

  wall = new Boundary(width / 2, height - 5, width, 10);
}

function draw() {
  background(51);

  // We must always step through time!
  let timeStep = 1.0 / 30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep, 10, 10);

  if (random(1) < 0.1) {
    let sz = random(4, 8);
    particles.push(new Particle(random(width), 20, sz));
  }


  // Look at all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].display();
    // Particles that leave the screen, we delete them
    // (note they have to be deleted from both the box2d world and our list
    if (particles[i].done()) {
      particles.splice(i, 1);
    }
  }

  wall.display();

}
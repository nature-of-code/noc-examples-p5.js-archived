// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Reference to physics world
let physics;

// A list of cluster objects
let cluster;

// Boolean that indicates whether we draw connections or not
let showPhysics = true;
let showParticles = true;

function setup() {

  createCanvas(640, 360);
  createP("'p' to display or hide particles<br>'c' to display or hide connections<br>'n' for new graph");


  // Initialize the physics
  physics = new VerletPhysics2D();

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));

  // Spawn a new random graph
  cluster = new Cluster(8, 100, new Vec2D(width / 2, height / 2));

}

function draw() {

  // Update the physics world
  physics.update();

  background(51);

  // Update physics
  physics.update();
  // Display all points
  if (showParticles) {
    cluster.display();
  }

  // If we want to see the physics
  if (showPhysics) {
    cluster.showConnections();
  }

}

// Key press commands
function keyPressed() {
  if (key == 'c' || key == 'C') {
    showPhysics = !showPhysics;
    if (!showPhysics) showParticles = true;
  } else if (key == 'p' || key == 'P') {
    showParticles = !showParticles;
    if (!showParticles) showPhysics = true;
  } else if (key == 'n' || key == 'N') {
    physics.clear();
    cluster = new Cluster(Math.floor(random(2, 20)), random(10, height - 100), new Vec2D(width / 2, height / 2));
  }
}
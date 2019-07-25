// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Reference to physics world
let physics;

// Our "Chain" object
let chain;

function setup() {
  createCanvas(640, 360);

  // Initialize the physics
  physics = new VerletPhysics2D();
  physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.5)));

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));

  // Initialize the chain
  chain = new Chain(180, 20, 16, 0.2);
}

function draw() {

  // Update the physics world
  physics.update();

  background(51);

  // Update physics
  physics.update();
  // Update chain's tail according to mouse position
  chain.updateTail(mouseX, mouseY);
  // Display chain
  chain.display();
}

function mousePressed() {
  // Check to see if we're grabbing the chain
  chain.contains(mouseX, mouseY);
}

function mouseReleased() {
  // Release the chain
  chain.release();
}
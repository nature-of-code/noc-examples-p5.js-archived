// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A reference to our box2d world
var world;

// A list for all of our boxes
var boxes = [];

function setup() {
  createCanvas(640,360);

  // Initialize box2d physics and create the world
  world = createWorld(new box2d.b2Vec2(0,0));

}

function draw() {
  background(51);

  // We must always step through time!
  var timeStep = 1.0/30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep,10,10);

  // Boxes fall from the top every so often
  if (isMousePressed) {
    var b = new Box(mouseX,mouseY);
    boxes.push(b);
  }
  // Display all the boxes
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
var world;

// A list we'll use to track fixed objects
var boundaries = [];
// A list for all of our rectangles
var pops = [];

function setup() {
  createCanvas(640,360);

  // Initialize box2d physics and create the world
  world = createWorld();

  // Add a bunch of fixed boundaries
  boundaries.push(new Boundary(width/4,height-5,width/2-50,10,0));
  boundaries.push(new Boundary(3*width/4,height-50,width/2-50,10,0));
  boundaries.push(new Boundary(width-5,height/2,10,height,0));
  boundaries.push(new Boundary(5,height/2,10,height,0));
}

function draw() {
  background(51);

  // We must always step through time!
  var timeStep = 1.0/30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep,10,10);

  // Display all the boundaries
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }

  // Display all the boxes
  for (var i = pops.length-1; i >= 0; i--) {
    pops[i].display();
    if (pops[i].done()) {
      pops.splice(i,1);
    }
  }
}

function mousePressed() {
  var p = new Lollipop(mouseX,mouseY);
  pops.push(p);
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
var world;


// A list for all of our particles
var particles = [];

// An object to describe a Windmill (two bodies and one joint)
var windmill;

<<<<<<< HEAD
function setup() {
=======

var text;

function setup() {
  text = createHTML("Click mouse to toggle motor.\nMotor: OFF");
  text.position(10,365);

>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
  createGraphics(640,360);

  // Initialize box2d physics and create the world
  world = createWorld();

  // Make the windmill at an x,y location
  windmill = new Windmill(width/2,175);
}

function draw() {
  background(51);

  // We must always step through time!
  var timeStep = 1.0/30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep,10,10);

  if (random(1) < 0.1) {
    var sz = random(4,8);
    particles.push(new Particle(random(width/2-100,width/2+100),-20,sz));
  }


  // Display all the pairs
  for (var i = particles.length-1; i >= 0; i--) {
    particles[i].display();
    if (particles[i].done()) {
      particles.splice(i,1);
    }
  }

  // Draw the windmill
  windmill.display();

  var status = "OFF";
  if (windmill.motorOn()) status = "ON";
  
<<<<<<< HEAD
  fill(255);
  noStroke();
  //strokeWeight(1);
  text("Click mouse to toggle motor.\nMotor: " + status,10,height-30);
=======
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
}

function mousePressed() {
  windmill.toggleMotor();
<<<<<<< HEAD
=======

  var status = "OFF";
  if (windmill.motorOn()) status = "ON";
  text.html("Click mouse to toggle motor.\nMotor: " + status);
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
}




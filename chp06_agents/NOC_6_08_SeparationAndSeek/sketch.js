// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Separation
// Via Reynolds: http://www.red3d.com/cwr/steer/

// A list of vehicles
var vehicles = [];

function setup() {
  createGraphics(640,360);
  // We are now making random vehicles and storing them in an array
  for (var i = 0; i < 100; i++) {
    vehicles.push(new Vehicle(random(width),random(height)));
  }
}

function draw() {
  background(51);

  
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].applyBehaviors(vehicles);
    vehicles[i].update();
    vehicles[i].borders();
    vehicles[i].display(); 
  }

  // Instructions
  fill(200);
  noStroke();
  text("Drag the mouse to generate new vehicles.",10,height-16);
}


function mouseDragged() {
  vehicles.push(new Vehicle(mouseX,mouseY));
}




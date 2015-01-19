// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Separation
// Via Reynolds: http://www.red3d.com/cwr/steer/

// A list of vehicles
var vehicles = [];

var slider1;
var slider2;
var slider3;

function setup() {
  var text = createP("Drag the mouse to generate new vehicles.");
  text.position(10,365);

  createCanvas(640,360);
  // We are now making random vehicles and storing them in an array
  for (var i = 0; i < 20; i++) {
    vehicles.push(new Vehicle(random(width),random(height)));
  }

  slider1 = createSlider(0,8,4);
  slider2 = createSlider(0,8,4);
  slider3 = createSlider(10,160,24);

}

function draw() {
  background(51);

  
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].applyBehaviors(vehicles);
    vehicles[i].update();
    vehicles[i].borders();
    vehicles[i].display(); 
  }

}


function mouseDragged() {
  //vehicles.push(new Vehicle(mouseX,mouseY));
}




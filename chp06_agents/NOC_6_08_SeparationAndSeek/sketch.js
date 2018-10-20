// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Separation
// Via Reynolds: http://www.red3d.com/cwr/steer/

// A list of vehicles
let vehicles = [];

let slider1;
let slider2;
let slider3;

function setup() {

  createCanvas(640, 360);
  // We are now making random vehicles and storing them in an array
  for (let i = 0; i < 50; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }

  slider1 = createSlider(0, 8, 4); //Separation Force
  slider2 = createSlider(0, 8, 4); //Seek Force
  slider3 = createSlider(10, 160, 24); //Desired Separation Distance
	s1 = createP("Separation Force");
	s2 = createP("Seek Force");
	s3 = createP("Separation Distance");
	s1.position(15, 380);
	s2.position(163, 380);
	s3.position(267, 380);

}

function draw() {
  background(51);

  for (let v of vehicles) {
    v.applyBehaviors(vehicles);
    v.update();
    v.borders();
    v.display();
  }

}

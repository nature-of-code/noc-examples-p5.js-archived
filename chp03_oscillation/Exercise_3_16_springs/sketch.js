// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Bobs
let b1;
let b2;
let b3;

let s1;
let s2;
let s3;

function setup() {
  createCanvas(640, 360);
  // Create objects at starting position
  // Note third argument in Spring constructor is "rest length"
  b1 = new Bob(width / 2, 100);
  b2 = new Bob(width / 2, 200);
  b3 = new Bob(width / 2, 300);

  s1 = new Spring(b1, b2, 100);
  s2 = new Spring(b2, b3, 100);
  s3 = new Spring(b1, b3, 100);
}

function draw() {
  background(200);

  s1.update();
  s2.update();
  s3.update();

  s1.display();
  s2.display();
  s3.display();

  b1.update();
  b1.display();
  b2.update();
  b2.display();
  b3.update();
  b3.display();

  b1.handleDrag(mouseX, mouseY);
}



function mousePressed() {
  b1.handleClick(mouseX, mouseY);
}

function mouseReleased() {
  b1.stopDragging();
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Mover object
let bobs = []
let springs = [];

function setup() {
  createCanvas(640, 360);
  // Create objects at starting position
  // Note third argument in Spring constructor is "rest length"
  for (let i = 0; i < 5; i++) {
    bobs[i] = new Bob(width/2, i*40);
  }
  for (let i = 0; i < 4; i++) {
    springs[i] = new Spring(bobs[i], bobs[i+1],40);
  }
}

function draw() {
  background(200); 

  for (let s of springs) {
    s.update();
    s.display();
  }

  for (let b of bobs) {
    b.update();
    b.display();
    b.handleDrag(mouseX, mouseY);
  }
}



function mousePressed() {
  for (let b of bobs) {
    b.handleClick(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let b of bobs) {
    b.stopDragging();
  }
}


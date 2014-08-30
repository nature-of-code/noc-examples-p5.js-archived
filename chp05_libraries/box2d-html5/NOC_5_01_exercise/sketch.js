// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A list for all of our boxes
var boxes = [];

function setup() {
  createCanvas(640,360);
}

function draw() {
  background(51);

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
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var mover;

function setup() {
  createCanvas(640,360);
  mover = new Mover(); 
}

function draw() {
  background(51);
  
  mover.update();
  mover.checkEdges();
  mover.display(); 
}


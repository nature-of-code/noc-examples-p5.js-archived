/*
  Create a random walker that has a tendency to move down and to 
  the right.
*/

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.render();
}
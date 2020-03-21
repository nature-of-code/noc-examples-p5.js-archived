/*
  Create a random walker with dynamic probabilities. 
  For example, can you give it a 50% chance of moving 
  in the direction of the mouse?
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
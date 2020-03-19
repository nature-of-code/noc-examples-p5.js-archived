/*
A Gaussian random walk is defined as one in which the step size 
(how far the object moves in a given direction) is generated with 
a normal distribution. Implement this variation of the random walk.
*/

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let x = 0;
let y = 0;

function setup() {
  createCanvas(200,200);
  background(0);
  smooth();
}

function draw() {
  //create an alpha blended background
  fill(0,1);
  rect(0,0,width,height);
  
  //calculate a probability between 0 and 100% based on mouseX position
  let prob = (mouseX / width);     
  
  //get a random floating point value between 0 and 1
  let r = random(1);   
  
  //test the random value against the probability and trigger an event
  if (r < prob) {
    noStroke();
    fill(255);
    ellipse(x,y,10,10);
  }
  
  // X and Y walk through a grid
  x = (x + 10) % width;
  if (x == 0) y = (y + 10) % width;
}

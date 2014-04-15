// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Recursion

function setup() {
  createCanvas(640,360);  
}

function draw() {
  background(51);
  drawCircle(width/2,height/2,width); 
  noLoop();
}

// Very simple function that draws one circle 
// and recursively calls itself
function drawCircle(x,y,r) {
  stroke(255);
  noFill();
  ellipse(x, y, r, r);
  // Exit condition, stop when radius is too small
  if(r > 2) {
    r *= 0.75;
    // Call the function inside the function! (recursion!)
    drawCircle(x, y, r);   
  }       
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Cantor Set
// Renders a simple fractal, the Cantor Set

function setup() {
  createCanvas(800, 200);
  background(51);
  
  // Call the recursive function
  cantor(35, 0, 730);
}

function draw() {
  // No need to loop
  noLoop();
}


function cantor(x, y, len) {
  
  var h = 30;
  
  // recursive exit condition
  if (len >= 1) {
    // Draw line (as rectangle to make it easier to see)
    noStroke();
    fill(255);
    rect(x, y, len, h/3);
    // Go down to next y position
    y += h;
    // Draw 2 more lines 1/3rd the length (without the middle section)
    cantor(x, y, len/3);
    cantor(x+len*2/3, y, len/3);
  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let xoff = 0;
let xincrement = 0.01;

function setup() {
  createCanvas(640, 360);
  background(0);
  noStroke();
}

function draw() {
  // Black transparent background
  fill(0, 10);
  rect(0, 0, width, height);

  // Try this to compare to noise
  // let n = random(0, width);

  // Get a noise value based on xoff and scale it according to the window's width
  let n = noise(xoff);
  let x = map(n, 0, 1, 0, width);

  // With each cycle, increment xoff
  xoff += xincrement;

  // Draw the ellipse at the value produced by perlin noise
  fill(200);
  ellipse(x, height / 2, 64, 64);
}

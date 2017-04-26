
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var xoff = 0;
var xincrement = 0.01;

function setup() {
  createCanvas(640,360);
  background(0);
  noStroke();
}

function draw() {

  fill(0, 10);
  rect(0,0,width,height);

  //var n = random(0,width);  // Try this line instead of noise

  // Get a noise value based on xoff and scale it according to the window's width
  var n = noise(xoff);

  var x = map(n,0,1,0,width);

  // With each cycle, increment xoff
  xoff += xincrement;

  // Draw the ellipse at the value produced by perlin noise
  fill(200);
  ellipse(x,height/2, 64, 64);

  print(n);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
  createGraphics(640,360);
}

function draw() {
  background(255);

  var period = 120;
  var amplitude = 300;
  // Calculating horizontal position according to formula for simple harmonic motion
  var x = amplitude * cos(TWO_PI * frameCount / period);
  stroke(0);
  strokeWeight(2);
  fill(127);
  translate(width/2,height/2);
  line(0,0,x,0);
  ellipse(x,0,48,48);
}
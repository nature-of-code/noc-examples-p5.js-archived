// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var angle = 0;
var aVelocity = 0.03;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  var amplitude = 300;
  var x = amplitude * sin(angle);
  angle += aVelocity;

  translate(width/2, height/2);

  stroke(255);
  fill(127);
  line(0, 0, x, 0);
  ellipse(x, 0, 48, 48);
}
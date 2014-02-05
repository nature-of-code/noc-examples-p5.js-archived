// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var angle = 0;
var aVelocity = 0.03;

function setup() {
  createGraphics(640,360);

  smooth();
}

function draw() {
  background(255);

  var amplitude = 300;
  var x = amplitude * cos(angle);
  angle += aVelocity;

  ellipseMode(CENTER);
  stroke(0);
  fill(175);
  translate(width/2,height/2);
  line(0,0,x,0);
  ellipse(x,0,20,20);
}
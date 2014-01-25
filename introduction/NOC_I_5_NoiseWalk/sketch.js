// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

var perlin;

function setup() {
  createGraphics(640,360);
  perlin = new Perlin();
  walker = new Walker();
  background(127);
};

function draw() {
  walker.walk();
  walker.display();
};

function Walker() {
  this.location = new PVector(width/2,height/2);
  this.noff = new PVector(0,2000);
};

Walker.prototype.display = function() {
  strokeWeight(2);
  fill(51);
  stroke(0);
  ellipse(this.location.x, this.location.y, 48, 48);
};

Walker.prototype.walk = function() {
  this.location.x = map(perlin.noise(this.noff.x),0,1,0,width);
  this.location.y = map(perlin.noise(this.noff.y),0,1,0,height);
  this.noff.add(0.01,0.01,0);
}

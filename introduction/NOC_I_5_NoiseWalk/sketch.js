// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

<<<<<<< HEAD
var perlin;

function setup() {
  createGraphics(640,360);
  perlin = new Perlin();
=======
function setup() {
  createGraphics(640,360);
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
  walker = new Walker();
  background(127);
};

function draw() {
  walker.walk();
  walker.display();
};

function Walker() {
  this.position = new PVector(width/2,height/2);
  this.noff = new PVector(random(1000),random(1000));
};

Walker.prototype.display = function() {
  strokeWeight(2);
  fill(51);
  stroke(0);
  ellipse(this.position.x, this.position.y, 48, 48);
};

Walker.prototype.walk = function() {
<<<<<<< HEAD
  this.position.x = map(perlin.noise(this.noff.x),0,1,0,width);
  this.position.y = map(perlin.noise(this.noff.y),0,1,0,height);
=======
  this.position.x = map(noise(this.noff.x),0,1,0,width);
  this.position.y = map(noise(this.noff.y),0,1,0,height);
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
  this.noff.add(0.01,0.01,0);
}

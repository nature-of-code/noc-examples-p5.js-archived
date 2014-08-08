// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var p;

function setup() {
  createCanvas(640,360);
   p = new Particle(createVector(width/2, 20));
}

function draw() {
  background(51);

  this.p.run();
  if (this.p.isDead()) {
    this.p = new Particle(createVector(width/2, 20));
    //println("Particle dead!"); 
  }
}

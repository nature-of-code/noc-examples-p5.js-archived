// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var p;

function setup() {
  createGraphics(800,200);
   p = new Particle(new PVector(width/2, 20));
   background(255);
   smooth();
  
}

function draw() {
  background(255);

  this.p.run();
  if (this.p.isDead()) {
    this.p = new Particle(new PVector(width/2,20));
    //println("Particle dead!"); 
  }

};
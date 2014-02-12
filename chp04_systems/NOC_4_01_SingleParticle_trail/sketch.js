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
  if(mouseIsPressed()){
    noStroke();
    fill(255, 5);
    rect(0, 0, width, height);
  

    this.p.run();
    if (this.p.isDead()) {    
      println("Particle dead!"); 
    }
  }

};
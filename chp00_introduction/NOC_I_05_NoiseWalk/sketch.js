// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

function setup() {
  createCanvas(640,360); //creating canvas of size 640 x 360
  walker = new Walker(); //creating an instance/object of class Walker
  background(127); // creating a grey background for canvas
}

function draw() {
  walker.step();
  walker.display();
}

function Walker() {
  this.tx = 0; //perlin noise x-offset
  this.ty = 10000; //perlin noise y-offset
  this.x = width/2; //x position for drawing ellipse initialized to center of canvas 
  this.y = height/2; //x position for drawing ellipse initialized to center of canvas 


  this.display = function() {
    strokeWeight(2); //stroke thickness of 2
    fill(51); //adding a fill of dark grey
    stroke(0); //black stroke
    ellipse(this.x, this.y, 48, 48); //ellipse of width 48x48 drawn a pos this.x,this.y
  };

  this.step = function() {
    this.x = map(noise(this.tx),0,1,0,width); //noise returns a value between 0 & 1 -> Mapping it to (0,canvas width)
    this.y = map(noise(this.ty),0,1,0,height); //Mapping perlin noise to (0,canvas.height)
    this.tx += 0.01; //incrementing perlin noise x offset
    this.ty += 0.01; //incrementing perlin noise y offset
  };
}


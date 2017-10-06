// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

function setup() {
  createCanvas(640,360); //creating a canvas of size 640 x 360 
  walker = new Walker(); //creating an instance/object of class Walker
  background(127); //setting a background of grey
}

function draw() {
  walker.step();
  walker.render();
}

function Walker() {
  //initializing the position of walker
  this.x = width/2; //width gives width of canvas
  this.y = height/2; //width gives height of canvas

  this.render = function() {
    stroke(0); //setting color of stroke to black
    point(this.x,this.y);
  };

  this.step = function() {
    
    var r = random(1); //return a random number between 0 and 1(exclusive)
      // A 40% of moving to the right!
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  };
}

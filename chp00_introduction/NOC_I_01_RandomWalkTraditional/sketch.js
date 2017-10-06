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
  walker.render();
}

function Walker() {
  this.x = width/2; //width gives width of canvas
  this.y = height/2; //height gives height of canvas

  this.render = function() {
    stroke(0); //stroke with a color of black
    point(this.x,this.y); //plot a point,takes 2 parameters x and y
  };

  this.step = function() {
    var choice = floor(random(4)); //return a random number between 0 and 4(exclusive)
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1); //making sure the x value of plotted point lies between 0 and canvas width
    this.y = constrain(this.y,0,height-1);//making sure the y value of plotted point lies between 0 and canvas height
  };
}

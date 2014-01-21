
var walker;

function setup() {
  createGraphics(640,360);
  walker = new Walker();
};

function draw() {
  walker.step();
  walker.render();
};

function Walker() {
  this.x = width/2;
  this.y = height/2;
};

Walker.prototype.render = function() {
  stroke(0);
  point(this.x,this.y);
};

Walker.prototype.step = function() {
  var choice = floor(random(4));
    
  if (choice == 0) {
    this.x++;
  } else if (choice == 1) {
    this.x--;
  } else if (choice == 2) {
    this.y++;
  } else {
    this.y--;
  }

  this.x = constrain(this.x,0,width-1);
  this.y = constrain(this.y,0,height-1);
}

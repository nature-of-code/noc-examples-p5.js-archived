// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  };

 render() {
    stroke(0);
    point(this.x,this.y);
  };

  step(){
    let choice = floor(random(4));
    let r = random(1);
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

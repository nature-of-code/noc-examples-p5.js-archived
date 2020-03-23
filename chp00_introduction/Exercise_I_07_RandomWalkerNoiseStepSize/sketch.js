/*
  In the above random walker, the result of the noise function 
  is mapped directly to the walker’s position. Create a random 
  walker where you instead map the result of the noise() 
  function to a walker's step size.
*/

let walker;

function setup() {
  background(255);
  createCanvas(640, 360);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.display();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.tx = 0;
    this.ty = 10000;
  }

  display() {
    ellipse(this.x, this.y, 16, 16);
  }

  step() {
    const stepX = map(noise(this.tx), 0, 1, -8, 8);
    const stepY = map(noise(this.ty), 0, 1, -8, 8);

    this.x += stepX;
    this.y += stepY;

    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);

    this.tx += 0.007;
    this.ty += 0.007;
  }
}
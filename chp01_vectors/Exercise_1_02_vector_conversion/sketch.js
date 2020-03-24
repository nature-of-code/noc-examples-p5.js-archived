/*
  Take one of the walker examples from the introduction and convert it to use vectors.
*/

/*
  A Gaussian random walk is defined as one in which the step size 
  (how far the object moves in a given direction) is generated with 
  a normal distribution. Implement this variation of the random walk.
*/

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.display();
}

class Walker {
  constructor() {
    // this.x = width / 2;
    // this.y = height / 2;
    this.position = createVector(width / 2, height / 2);
    // this.prevX = null;
    // this.prevY = null;
    this.prevPosition = createVector(null, null);
  }

  display() {
    stroke(0);
    // line(this.prevX, this.prevY, this.x, this.y);
    line(this.prevPosition.x, this.prevPosition.y, this.position.x, this.position.y);
  }

  step() {
    // this.prevX = this.x;
    // this.prevY = this.y;
    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;

    const choice = floor(random(4));
    const stepSize = randomGaussian(10, 3)

    if (choice === 0) {    
        // this.x += stepSize;
        this.position.x += stepSize;
    } else if (choice === 1) {
        // this.x -= stepSize;
        this.position.x -= stepSize;
    } else if (choice === 2) {
        // this.y += stepSize;
        this.position.y += stepSize;
    } else {
        // this.y -= stepSize;
        this.position.y -= stepSize;
    }

    // this.x = constrain(this.x, 0, width-1);
    this.position.x = constrain(this.position.x, 0, width-1);
    // this.y = constrain(this.y, 0, height-1);
    this.position.y = constrain(this.position.y, 0, height-1);
  }
}
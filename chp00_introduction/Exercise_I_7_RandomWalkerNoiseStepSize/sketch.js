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
  walker.walk();
  walker.display();
}

class Walker{
  constructor(){
    this.position = createVector(width/2,height/2);
    this.time = random(1000);
  }

 display() {
    strokeWeight(2);
    fill(51);
    stroke(0);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  walk() {
    const stepSize = map(noise(this.time),0,1,0,30);
    const choice = floor(random(4));

    if (choice === 0) {
        this.position.x += stepSize;
    } else if (choice == 1) {
        this.position.x -= stepSize;
    } else if (choice == 2) {
        this.position.y += stepSize;
    } else {
        this.position.y -= stepSize;
    }

    this.position.x = constrain(this.position.x,0,width-1);
    this.position.y = constrain(this.position.y,0,height-1);
    this.time += 0.01;
  }
}

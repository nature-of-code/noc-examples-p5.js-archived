// Daniel Shiffman
// The Nature of Code
// http://natureofcode.com

// A random walker class!

class Walker {
    constructor() {
      this.pos = createVector(width/2,height/2);
    }
  
    render() {
      stroke(0);
      fill(175);
      rectMode(CENTER);
      rect(this.pos.x,this.pos.y,40,40);
    }
  
    // Randomly move up, down, left, right, or stay in one place
    walk() {
      let vel = createVector(random(-2,2),random(-2,2));
      this.pos.add(vel);
      
      // Stay on the screen
      this.pos.x = constrain(this.pos.x,0,width-1);
      this.pos.y = constrain(this.pos.y,0,height-1);
    }
  }
  
  
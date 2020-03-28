// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A random walker class!

class Walker {
    constructor() {
      this.position = createVector(width/2, height/2);
      this.history = [];
    }
  
    display() {
      stroke(0);
      fill(175);
      rectMode(CENTER);
      rect(this.position.x, this.position.y, 16, 16);
  
      beginShape();
      stroke(0);
      noFill();
      for (let v of this.history) {
        vertex(v.x, v.y);
      }
      endShape();
    }
  
    // Randomly move up, down, left, right, or stay in one place
    walk() {
      let vel = createVector(random(-2, 2), random(-2, 2));
      this.position.add(vel);
  
      // Stay on the screen
      this.position.x = constrain(this.position.x, 0, width-1);
      this.position.y = constrain(this.position.y, 0, height-1);
  
  
      this.history.push(this.position.copy());
      if (this.history.length > 1000) {
        this.history.shift();
      }
    }
  }
  
  
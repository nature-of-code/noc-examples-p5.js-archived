// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A random walker class!

class Walker {  
    constructor() {
      this.position = createVector(width/2, height/2);
      this.history = [];
      this.noff = createVector(random(1000), random(1000));
      this.velocity = createVector();
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
  
  
      this.velocity.x = map(noise(this.noff.x), 0, 1, -1, 1);
      this.velocity.y = map(noise(this.noff.y), 0, 1, -1, 1);
      this.velocity.mult(5);
  
      this.noff.add(0.01, 0.01, 0);
  
      this.position.add(this.velocity);
  
      this.history.push(this.position.copy());
      if (this.history.length > 1000) {
        this.history.remove(0);
      }
  
      // Stay on the screen
      this.position.x = constrain(this.position.x, 0, width-1);
      this.position.y = constrain(this.position.y, 0, height-1);
    }
  }
  
  
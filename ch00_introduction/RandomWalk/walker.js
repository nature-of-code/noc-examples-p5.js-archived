// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A random walker class!

class Walker {
    constructor() {
      this.x = width/2;
      this.y = height/2;
    }
  
    render() {
      stroke(0);
      fill(175);
      rectMode(CENTER);
      rect(this.x, this.y, 40, 40);
    }
  
    // Randomly move up, down, left, right, or stay in one place
    walk() {
      let vx = random(-2, 2);
      let vy = random(-2, 2);
      this.x += vx;
      this.y += vy;
  
      // Stay on the screen
      this.x = constrain(this.x, 0, width-1);
      this.y = constrain(this.y, 0, height-1);
    }
}
  
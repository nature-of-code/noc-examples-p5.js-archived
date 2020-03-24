// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A random walker object!

class Walker {  
    constructor() {
      this.position = createVector(width/2, height/2);
      this.history = [];
    }
  
    render() {
      stroke(0);
      beginShape();
      for (let v of this.history) {
        curveVertex(v.x, v.y);
      }
      endShape();
  
      noFill();
      stroke(0);
      ellipse(this.position.x, this.position.y, 16, 16);
    }
  
    // Randomly move up, down, left, right, or stay in one place
    step() {
  
      this.position.x += random(-10, 10);
      this.position.y += random(-10, 10);
  
  
      this.position.x = constrain(this.position.x, 0, width-1);
      this.position.y = constrain(this.position.y, 0, height-1);
  
      this.history.push(this.position.copy());
    }
  }
  
  
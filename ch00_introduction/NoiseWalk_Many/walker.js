// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A random walker class!
class Walker {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.noff = createVector(random(1000), random(1000));
    }

    display() {
        strokeWeight(2);
        fill(127);
        stroke(0);
        ellipse(this.position.x, this.position.y, 48, 48);      
    }

    // Randomly move up, down, left, right, or stay in one place
    walk() {    
        this.position.x = map(noise(this.noff.x),0,1,0,width);
        this.position.y = map(noise(this.noff.y),0,1,0,height);
        
        this.noff.x += 0.01;
        this.noff.y += 0.01;
    }
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A random walker object!

class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }

    render() {
        stroke(0);
        strokeWeight(2);
        point(this.x, this.y);
    }

    // Randomly move up, down, left, right, or stay in one place
    step() {
        const r = random(1);

        // A 40% of moving to the right!
        if (r < 0.4) {    
            this.x++;
        } else if (r < 0.5) {
            this.x--;
        } else if (r < 0.9) {
            this.y++;
        } else {
            this.y--;
        }

        this.x = constrain(this.x,0,width-1);
        this.y = constrain(this.y,0,height-1);
    }
}
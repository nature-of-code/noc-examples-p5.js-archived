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
        // A 50% of moving towards the mouse
        if (r < 0.5) {
            let xdir = (mouseX - this.x);
            let ydir = (mouseY - this.y);

            if (xdir !== 0) {
                xdir /= abs(xdir);
            }
            if (ydir !== 0) {
                ydir /= abs(ydir);
            }
            this.x += xdir;
            this.y += ydir;
        } else {
            const xdir = int(random(-2, 2));
            const ydir = int(random(-2, 2));

            this.x += xdir;
            this.y += ydir;
        }

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, width - 1);
    }
}
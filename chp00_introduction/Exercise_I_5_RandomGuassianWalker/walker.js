/*
Create a random walker with dynamic probabilities. 
For example, can you give it a 50% chance of moving in the direction of the mouse?
*/

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A random walker object!

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    render() {
        stroke(0);
        strokeWeight(2);
        point(this.x, this.y);
    }

    step() {
        const choice = floor(random(4));
        const stepSize = randomGaussian(10, 3)

        console.log(choice);
        console.log(stepSize)
        if (choice === 0) {    
            this.x += stepSize;
        } else if (choice === 1) {
            this.x -= stepSize;
        } else if (choice === 2) {
            this.y += stepSize;
        } else {
            this.y -= stepSize;
        }

        this.x = constrain(this.x, 0, width-1);
        this.y = constrain(this.y, 0, height-1);
    }
}
let walker;

function setup() {
    createCanvas(400, 400);
    frameRate(30);

    walker = new Walker();
}

function draw() {
    background(255);

    walker.step();
    walker.display();
}

class Walker {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.history = [];
    }

    display() {
        stroke(0);
        fill(175);
        rectMode(CENTER);
        rect(this.position.x, this.position.y, 16, 16);
        beginShape(POINTS);
        stroke(0);
        this.history.forEach((vector) => vertex(vector.x, vector.y));
        endShape();
    }

    // Randomly move up, down, left, right, or stay in one place
    step() {
        let vel = createVector(random(-2, 2), random(-2, 2));
        this.position.add(vel.x, vel.y);

        // Stay on the screen
        this.position.x = constrain(this.position.x, 0, width - 1);
        this.position.y = constrain(this.position.y, 0, height - 1);


        this.history.push(this.position.copy());

        if (this.history.length > 1000) {
            this.history.shift();
        }
    }
}
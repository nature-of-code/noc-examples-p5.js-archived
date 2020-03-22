let walker;

function setup() {
    createCanvas(400, 400);
    frameRate(30);

    walker = new Walker();
}

function draw() {
    background(255);
    walker.step();
    walker.render();
}

class Walker {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
    }

    render() {
        stroke(0);
        fill(175);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, 40, 40);
    }

    step() {
        let vel = createVector(random(-2,2), random(-2,2));
        this.pos.add(vel);

        // Stay on the screen
        this.pos.x = constrain(this.pos.x, 0, width-1);
        this.pos.y = constrain(this.pos.y, 0, height-1);
    }
}
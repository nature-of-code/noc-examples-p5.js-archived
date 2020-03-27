let mover;

function setup() {
    createCanvas(640, 360);
    mover = new Mover();
}

function draw() {
    background(255);

    mover.update();
    mover.checkEdges();
    mover.display();
}

class Mover {
    constructor() {
        this.position = createVector(width/2, height/2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(-0.001, 0.01);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.position.x, this.position.y, 16, 16);
    }

    checkEdges() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    limit(max) {
        if (this.velocity > max) {
            this.velocity.normalize();
            this.velocity.mult(max);
        }
    }
}
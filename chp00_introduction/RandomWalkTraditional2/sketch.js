let walker;

function setup() {
    createCanvas(200, 200);
    walker = new Walker();
    background(0);
}

function draw() {
    walker.step();
    walker.render();
}

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    render() {
        stroke(255);
        point(this.x, this.y);
    }

    step() {
        let stepx = int(random(3)) - 1;
        let stepy = int(random(3)) - 1;

        this.x += stepx;
        this.y += stepy;

        this.x = constrain(this.x, 0, width - 1);

        this.y = constrain(this.y, 0, height - 1);
    }
}
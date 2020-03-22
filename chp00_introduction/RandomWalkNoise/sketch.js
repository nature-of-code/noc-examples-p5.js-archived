let walker;

function setup() {
    createCanvas(640, 360);
    walker = new Walker();
    background(0);
}

function draw() {
    walker.step();
    walker.render();
}

class Walker {
    constructor() {
        this.tx = 0;
        this.ty = 10000;
        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, height);
        this.prevX = null;
        this.prevY = null;
    }

    render() {
        stroke(255);
        line(this.prevX, this.prevY, this.x, this.y);
    }

    step() {
        this.prevX = this.x;
        this.prevY = this.y;

        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, height);
    
        this.tx += 0.01;
        this.ty += 0.01;
    }
}
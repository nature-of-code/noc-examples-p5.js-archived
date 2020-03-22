let walker;

function setup() {
    createCanvas(400, 300);
    walker = new Walker();
}

function draw() {
    walker.step();
    walker.render();
}

class Walker {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.history = [];
    }

    render() {
        stroke(0);
        beginShape();
        this.history.forEach((vector) => vertex(vector.x, vector.y));
        endShape();

        noFill();
        stroke(0);
        ellipse(this.position.x, this.position.y);
    }

    step() {
        this.position.x += random(-10, 10);
        this.position.y += random(-10, 10);
    
    
        this.position.x = constrain(this.position.x, 0, width - 1);
        this.position.y = constrain(this.position.y, 0, height - 1);
    
        this.history.push(this.position.copy());
    }
}
/*
    Use the noise values as the elevations of a landscape. 
*/

// Sketch does not work yet because 
// quad_strip not yet implemented in webgl mode for p5

let land;
let theta = 0.0;

function setup() {
    createCanvas(800, 200, WEBGL);

    // Create a landscape object
    land = new Landscape(20,800,400);
}

function draw() {
    // Ok, visualize the landscape space
    background(255);
    push();
    translate(width / 2, height / 2 + 20, -160);
    rotateX(PI / 3);
    rotateZ(theta);
    land.render(); 
    pop();

    land.calculate();

    theta += 0.0025;
}


class Landscape {
    constructor(scl_, w_, h_) {
        this.scl = scl_;
        this.w = w_;
        this.h = h_;
        this.cols = this.w / this.scl;
        this.rows = this.h / this.scl;
        this.z = new Array(this.cols);
        this.zoff = 0.0;
        for (let i = 0; i < this.z.length; i++) {
            this.z[i] = new Array(this.rows)
        }
    }

    calculate() {
        let xoff = 0;
        for (let i = 0; i < this.cols; i++) {
            let yoff = 0;
            for (let j = 0; j < this.rows; j++) {
                this.z[i][j] = map(noise(xoff, yoff, this.zoff), 0, 1, -120, 120);
                yoff += 0.1;
            }
            xoff += 0.1;
        }
        this.zoff += 0.01;
    }

    // Render landscape as grid of quads
    render() {
        // Every cell is an individual quad
        for (let x = 0; x < this.z.length-1; x++) {
            beginShape(QUAD_STRIP);
            for (let y = 0; y < this.z[x].length; y++) {
                // one quad at a time
                // each quad's color is determined by the height value at each vertex
                // (clean this part up)
                stroke(0);
                let currentElevation = this.z[x][y];
                let currentShade = map(currentElevation, -120, 120, 0, 255);
                fill(currentShade, 255);
                let xCoordinate = x * this.scl - this.w / 2;
                let yCoordinate = y * this.scl - this.h / 2;
                vertex(xCoordinate, yCoordinate, this.z[x][y]);
                vertex(xCoordinate + this.scl, yCoordinate, this.z[x + 1][y]);
            }
            endShape();
        }
    }
}

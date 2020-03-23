// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Testing Distribution of Perlin Noise generated #'s vs. Randoms

let vals;
let norms;
let xoff = 0.0;

function setup() {
    createCanvas(300, 200);
    vals = new Array(width).fill(0.0);
    norms = new Array(width).fill(0.0);
}

function draw() {
    background(100);
    let n = noise(xoff);
    let index = int(n * width);
    vals[index]++;
    xoff += 0.01;
    stroke(255);
    let normalization = false;
    let maxy = 0.0;

    for (let x = 0; x < vals.length; x++) {
        line(x, height, x, height - norms[x]);
        if (vals[x] > height) normalization = true;
        if (vals[x] > maxy) maxy = vals[x];
    }
    for (let x = 0; x < vals.length; x++) {
        if (normalization) norms[x] = (vals[x] / maxy) * (height);
        else norms[x] = vals[x];
    }
}
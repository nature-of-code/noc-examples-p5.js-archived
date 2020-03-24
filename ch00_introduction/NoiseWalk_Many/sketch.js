// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let w = [];

let total = 0;

function setup() {
    createCanvas(600, 400);

    w = new Array(10);
    for (let i = 0; i < w.length; i++) {
        w[i] = new Walker(); 
    }
}

function draw() {
    background(255);
    let o = int(map(mouseX,0,width,1,8));
    noiseDetail(o, 0.3);

    if (frameCount % 30 === 0) {
        total += 1;
        if (total > w.length - 1) {
            total = w.length - 1;
        }
    }

    for (let i = 0; i < total; i++) {
        w[i].walk();
        w[i].display();
    }
}
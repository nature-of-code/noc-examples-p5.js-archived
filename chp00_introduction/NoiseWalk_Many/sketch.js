let walkers = [];
let total = 0;

function setup() {
    createCanvas(600, 400);

    walkers = new Array(10);
    for (let i = 0; i < walkers.length; i++) {
        walkers[i] = new Walker(); 
    }
}

function draw() {
    background(255);
    let o = int(map(mouseX,0,width,1,8));
    noiseDetail(o, 0.3);

    if (frameCount % 30 === 0) {
        total += 1;
        if (total > walkers.length - 1) {
            total = walkers.length - 1;
        }
    }

    for (let i = 0; i < total; i++) {
        walkers[i].walk();
        walkers[i].display();
    }
}

// A random walker object!
class Walker {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.noff = createVector(random(1000), random(1000));
    }

    display() {
        strokeWeight(2);
        fill(127);
        stroke(0);
        ellipse(this.position.x, this.position.y, 48, 48);      
    }

      // Randomly move up, down, left, right, or stay in one place
    walk() {    
        this.position.x = map(noise(this.noff.x),0,1,0,width);
        this.position.y = map(noise(this.noff.y),0,1,0,height);
        
        this.noff.x += 0.01;
        this.noff.y += 0.01;
    }
}
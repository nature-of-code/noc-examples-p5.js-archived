let fly;
let flyImg;


function preload() {
    flyImg = loadImage('assets/fly.jpg');
}

function setup() {
    createCanvas(640, 340);
    fly = new Fly();
}

function draw() {
    fly.display();
}

class Creature {
    constructor() {
        this.x = random(width);
        this.y = random(height);
    }
}

class Fly extends Creature {
    constructor() {
        super();
    }

    display() {
        image(flyImg, this.x, this.y);
    }
}
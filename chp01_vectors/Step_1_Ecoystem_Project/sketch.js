let creatures = [];

let jellyfishImg;
let goldfishImg;
let sealImg;
let crabImg;

function preload() {
    jellyfishImg = loadImage("assets/jellyfish.png");
    goldfishImg = loadImage("assets/goldfish.png");
    sealImg = loadImage("assets/seal.png");
    crabImg = loadImage("assets/crab.png");
}

function setup() {
    createCanvas(1000, 640);

    let jellyfish = Array(7);
    for (let i = 0; i < jellyfish.length; i++) {
        jellyfish[i] = new Jellyfish(); 
    }

    let goldfish = Array(15);
    for (let i = 0; i < goldfish.length; i++) {
        goldfish[i] = new Goldfish(); 
    }

    let seal = [new Seal()]

    let crab = Array(5);
    for (let i = 0; i < crab.length; i++) {
        crab[i] = new Crab(); 
    }

    creatures.push(jellyfish, goldfish, seal, crab);
}

function draw() {
    background(255);
    creatures.forEach((population) => {
        population.forEach((creature) => {
            creature.update();
            creature.limit();
            creature.display();
        });
    });
}

class Creature {
    limit() {
        this.position.x = constrain(this.position.x, 0, width-15);
        this.position.y = constrain(this.position.y, 0, height-15);
    }

    display() {
        image(this.img, this.position.x, this.position.y, this.imgWidth, this.imgHeight);
    }
}


class Jellyfish extends Creature {
    constructor() {
        super();
        this.img = jellyfishImg;
        this.imgWidth = 75;
        this.imgHeight = 100;
        this.position = createVector(random(width), random(height / 2));
    }

    update() {
        const ran = random(1);
        if (ran < 0.15) {
            let velocity = createVector(random(-2,2),random(-2,2));
            this.position.add(velocity);
        }
    }
}

class Goldfish extends Creature {
    constructor() {
        super();
        this.img = goldfishImg;
        this.imgWidth = 45;
        this.imgHeight = 30;
        this.noff = createVector(random(1000), random(1000));
        this.position = createVector(width / 2, height / 2);
    }

    update() {
        this.position.x = map(noise(this.noff.x),0,1,0,width);
        this.position.y = map(noise(this.noff.y),0,1,0,height);
        
        this.noff.x += 0.01;
        this.noff.y += 0.01;
    }
}

class Crab extends Creature {
    constructor() {
        super();
        this.img = crabImg;
        this.imgWidth = 75;
        this.imgHeight = 75;
        this.position = createVector(random(width),height - 75);
    }

    update() {
        const choice = random();
        const stepSize = randomGaussian(5);

        if (choice > 0.8) {    
            this.position.x += stepSize;
        } else if (choice < 0.2) {
            this.position.x -= stepSize;
        } 
    }
}

class Seal extends Creature {
    constructor() {
        super();
        this.img = sealImg;
        this.imgWidth = 130;
        this.imgHeight = 100;
        this.position = createVector(width/2,height/2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topspeed = 5;
    }

    update() {
        let mouse = createVector(mouseX,mouseY);
        this.acceleration = p5.Vector.sub(mouse,this.position);
        // Set magnitude of acceleration
        this.acceleration.setMag(0.2);
    
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    }
}



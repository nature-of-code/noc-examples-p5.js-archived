let creatures = [];

let fly;
let flyImg;
let turtle;
let turtleImg
let snake;
let snakeImg;



function preload() {
    flyImg = loadImage('assets/fly.png');
    turtleImg = loadImage('assets/turtle.png');
    snakeImg = loadImage('assets/snake.png');
}

function setup() {
    createCanvas(640, 340);
    fly = new Fly();
    turtle = new Turtle();
    snake = new Snake();
    creatures.push(fly, turtle, snake);
}

function draw() {
    background(255);
    for (let i = 0; i < creatures.length; i++) {
        creatures[i].update();
        creatures[i].display();
        creatures[i].limit();
    }
}

class Creature {
    constructor() {
        this.position = createVector(random(width), random(height));
    }

    limit() {
        this.position.x = constrain(this.position.x, 0, width-1);
        this.position.y = constrain(this.position.y, 0, height-1);
    }

    display() {
        image(this.img, this.position.x, this.position.y, this.imgWidth, this.imgHeight);
    }
}


class Turtle extends Creature {
    constructor() {
        super();
        this.img = turtleImg;
        this.imgWidth = 100;
        this.imgHeight = 100;
    }

    update() {
        const ran = random(1);
        if (ran < 0.35) {
            let velocity = createVector(random(-2,2),random(-2,2));
            this.position.add(velocity);
        }
    }

    acceptReject() {
        let total = 10;
        while (true) {
            let r1 = floor(random(total));
            let probability = r1;
            let r2 = floor(random(total));
    
            if (r2 > probability) {
                return r1;
            }
        }
    }


}

class Fly extends Creature {
    constructor() {
        super();
        this.img = flyImg;
        this.imgWidth = 25;
        this.imgHeight = 25;
    }

    update() {
        let velocity = createVector(random(-1,1), random(-1,1));
        velocity.mult(montecarlo()*50);
        this.position.add(velocity)
    }
}

function montecarlo() {
    while (true) {	
  
      let r1 = random(1);	
      let probability = pow(1.0 - r1,8);	
  
      let r2 = random(1);	
      if (r2 < probability) {	
        return r1;
      }
    }
}

class Snake extends Creature {
    constructor() {
        super();
        this.img = snakeImg;
        this.imgWidth = 130;
        this.imgHeight = 90;

        this.tx = 0;
        this.ty = 10000;
    }

    update() {
        let velocity = createVector(
            map(noise(this.tx), 0, 1, -8, 8),
            map(noise(this.ty), 0, 1, -8, 8)
        );
        this.position.add(velocity)

        this.tx += 0.007;
        this.ty += 0.007;
    }
}
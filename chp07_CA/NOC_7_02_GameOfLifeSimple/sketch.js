var gol;

function setup() {
  	createCanvas(640, 360);
  	setFrameRate(24);
  	gol = new GOL();
}

function draw() {
  	background(255);
  	gol.generate();
  	gol.display();
};

function mousePressed() {
  	gol.init();
};


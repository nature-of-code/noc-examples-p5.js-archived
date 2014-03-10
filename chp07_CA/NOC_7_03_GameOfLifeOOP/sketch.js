var gol;

function setup() {
  	createGraphics(640, 360);
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


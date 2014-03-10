var gol;

function setup() {
  	createGraphics(400, 400);
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


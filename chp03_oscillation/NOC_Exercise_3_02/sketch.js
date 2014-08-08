// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var mover;

function setup() {
	createCanvas(640,360);
	mover = new Mover();
}

function draw() {
	background(102, 209, 104);
	mover.update();
	mover.checkEdges();
	mover.display();
};

function keyPressed () {
	if (key == 'A' || key == 'a') {
		mover.turnLeft();
	} else if (key == 'S' || key == 's') {
		mover.turnRight();
	}
};
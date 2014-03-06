function setup() {
	createGraphics(640,360);
}

function draw() {
	background(255);
	drawCircle(width/2, height/2, 400);
	noLoop();
};

function drawCircle(x, y, r) {
	stroke(0);
	noFill();
  	ellipse(x, y, r, r);
  	if(r > 2) {
		drawCircle(x + r/2, y, r/2);
		drawCircle(x - r/2, y, r/2);
  	}
};

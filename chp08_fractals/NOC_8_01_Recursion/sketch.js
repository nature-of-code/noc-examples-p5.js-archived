function setup() {
	createCanvas(640,360);
}

function draw() {
	background(51);
	drawCircle(width/2, height/2, width);
	noLoop();
};

function drawCircle(x, y, r) {
	ellipse(x, y, r, r);
	if(r>2) {
		r*=0.75;
		drawCircle(x, y, r, r);
	}
};

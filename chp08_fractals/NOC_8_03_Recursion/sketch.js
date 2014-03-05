function setup() {
	createGraphics(640, 360);  
}

function draw() {
  	background(255);
  	drawCircle(width/2, height/2, 400);
  	noLoop();
};

function drawCircle(x, y, radius) {
  	noFill();
  	stroke(0);
  	ellipse(x, y, radius, radius);
  	if (radius > 8) {
    		drawCircle(x + radius/2, y, radius/2);
    		drawCircle(x - radius/2, y, radius/2);
    		drawCircle(x, y + radius/2, radius/2);
    		drawCircle(x, y - radius/2, radius/2);
  	}
};


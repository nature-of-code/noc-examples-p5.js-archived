function setup() {
	createCanvas(800, 200);
  	smooth();
};

function draw() {
  	background(255);
  	translate(width/2, height);
  	stroke(0);
  	branch(60);
  	noLoop();
};

function branch(len) {
  	strokeWeight(2);
      
  	line(0, 0, 0, -len);
  	translate(0, -len);

  	len *= 0.66;
  	if (len > 2) {
    	pushMatrix();
    	rotate(PI/5);
    	branch(len);
    	popMatrix();
	pushMatrix();
    	rotate(-PI/5);
    	branch(len);
    	popMatrix();
  	}
};


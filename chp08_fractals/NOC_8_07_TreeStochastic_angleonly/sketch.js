function setup() {
	createGraphics(800, 200);
  	newTree();
}

function draw() {
  	noLoop();
}

function mousePressed() {
  	pushMatrix();
  	newTree();
  	popMatrix();
  	draw();
}

function newTree() {
  	background(255);
  	fill(0);
  	text("Click mouse to generate a new tree", 10, height-10);

  	stroke(0);
  	translate(width/2, height);!
  	branch(60);
};



function branch(h) {
  	var sw = map(h, 2, 120, 1, 5);
  	strokeWeight(sw);
  	var theta = random(0,PI/3);
 
  	line(0, 0, 0, -h);
  	translate(0, -h);
  	h *= 0.66;
  	if (h > 2) {
    		pushMatrix();    
    		rotate(theta);   
    		branch(h);
    		popMatrix();     
    		pushMatrix();
    		rotate(-theta);
    		branch(h);
    		popMatrix();
 	}
};


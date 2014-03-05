function setup() {
	createGraphics(800, 200);
  	background(255);
  
  	cantor(35, 0, 730);
}

function draw() {
  	noLoop();
};


function cantor(x, y, len) {
  
  	var h = 30;
  
  	if (len >= 1) {
    		noStroke();
    		fill(0);
    		rect(x, y, len, h/3);
    		y += h;
    		cantor(x, y, len/3);
    		cantor(x+len*2/3, y, len/3);
  	}
};


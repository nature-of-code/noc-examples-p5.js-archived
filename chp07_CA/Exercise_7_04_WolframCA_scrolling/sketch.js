var ca;

function setup() {
  	createGraphics(640, 800);
  	setFrameRate(24);
  	background(255);
  	var ruleset = new Array(0,1,0,1,1,0,1,0);
  
  	ca = new CA(ruleset);
}

function draw() {
  	background(255);
  	ca.display();
  	ca.generate();
};

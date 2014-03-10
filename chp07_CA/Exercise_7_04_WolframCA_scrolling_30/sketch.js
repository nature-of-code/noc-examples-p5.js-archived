var ca;


function setup() {
  	createGraphics(800, 100);
  	setFrameRate(30);
  	background(255);
  	var ruleset = new Array(0,1,1,1,1,0,0,0);
  	ca = new CA(ruleset);
}

function draw() {
  	ca.display();
  	ca.generate();
};


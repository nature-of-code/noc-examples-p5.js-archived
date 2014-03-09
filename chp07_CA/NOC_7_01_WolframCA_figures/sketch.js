var ca;

var scl = 20;

function setup() {
	createGraphics(1800,600);
  	background(255);
  	var ruleset = new Array(0,1,1,1,1,0,1,1);
  	ca = new CA(ruleset);
}

function draw() {
  	ca.render();
  	ca.generate();
  
  	if (ca.finished()) { 
    		//saveFrame("rule222.png");		????
    		noLoop();
  	}
};

function mousePressed() {
  	background(255);
  	ca.randomize();
  	ca.restart();
};

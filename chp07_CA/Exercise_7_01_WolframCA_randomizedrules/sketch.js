var ca;

var delay = 0;

function setup() {
  	createGraphics(640, 360);
  	background(51);
  	var ruleset = new Array(0, 1, 0, 1, 1, 0, 1, 0);
  	ca = new CA(ruleset);
}

function draw() {
  	ca.display();
  	ca.generate();

  	if (ca.finished()) {
    		delay++;
    		if (delay > 30) {
      			background(51);
      			ca.randomize();
      			ca.restart();
      			delay = 0;
    		}
  	}
};

function mousePressed() {
  	background(255);
  	ca.randomize();
  	ca.restart();
};


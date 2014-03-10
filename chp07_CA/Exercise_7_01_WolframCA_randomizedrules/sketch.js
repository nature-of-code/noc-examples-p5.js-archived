var ca;

var delay = 0;

function setup() {
  	createGraphics(800, 200);
  	background(255);
  	var ruleset = new Array(0, 1, 0, 1, 1, 0, 1, 0);
  	ca = new CA(ruleset);
  	setFrameRate(30);
}

function draw() {
  	ca.display();
  	ca.generate();

  	if (ca.finished()) {
    		delay++;
    		if (delay > 30) {
      			background(255);
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


var ca;

var delay = 0;

function setup() {
<<<<<<< HEAD
  	createGraphics(800, 200);
  	background(255);
  	var ruleset = new Array(0, 1, 0, 1, 1, 0, 1, 0);
  	ca = new CA(ruleset);
  	setFrameRate(30);
=======
  	createGraphics(640, 360);
  	background(51);
  	var ruleset = new Array(0, 1, 0, 1, 1, 0, 1, 0);
  	ca = new CA(ruleset);
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
}

function draw() {
  	ca.display();
  	ca.generate();

  	if (ca.finished()) {
    		delay++;
    		if (delay > 30) {
<<<<<<< HEAD
      			background(255);
=======
      			background(51);
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
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


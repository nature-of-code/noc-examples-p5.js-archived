var k;

function setup() {
	createGraphics(800,250);
	setFrameRate(1);
	k = new KochFractal();
	smooth();
}

function draw() {
	background(255);
	k.render();
  	k.nextLevel();
  	if (k.getCount() > 5) {
    		k.restart();
  	}
};

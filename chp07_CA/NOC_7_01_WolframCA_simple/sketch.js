var ca;


function setup() {
	createGraphics(800, 400);
  	background(255);
  	ca = new CA();
}

function draw() {
  	ca.display();
  	if (ca.generation < height/ca.w) {
    		ca.generate();
  	}
};


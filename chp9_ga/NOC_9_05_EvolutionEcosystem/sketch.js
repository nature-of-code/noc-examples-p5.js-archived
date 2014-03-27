var world;

function setup() {
  	createGraphics(640, 360);
  	world = new World(20);
  	smooth();
}

function draw() {
  	background(255);
  	world.run();
};

function mousePressed() {
  	world.born(mouseX,mouseY); 
};

function mouseDragged() {
  	world.born(mouseX,mouseY); 
};



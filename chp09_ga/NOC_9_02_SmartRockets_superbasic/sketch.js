var lifetime;
var population;
var lifeCounter;
var target;

function setup() {
  	createGraphics(640, 360);
  	lifetime = height;
  	lifeCounter = 0;
  	target = new PVector(width/2, 24);

  	var mutationRate = 0.1;
  	population = new Population(mutationRate, 50);
}

function draw() {
  	background(255);
  	fill(0);
  	ellipse(target.x,target.y,24,24);

  	if (lifeCounter < lifetime) {
    		population.live();
    		lifeCounter++;
  	} 
  	else {
    		lifeCounter = 0;
    		population.fitness();
    		population.selection();
    		population.reproduction();
  	}

  	fill(0);
  	text("Generation #: " + population.getGenerations(), 10, 18);
  	text("Cycles left: " + (lifetime-lifeCounter), 10, 36);
};

function mousePressed() {
  target.x = mouseX;
  target.y = mouseY;
};


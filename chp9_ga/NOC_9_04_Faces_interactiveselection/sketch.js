var population;
var button;

function setup() {
  	createGraphics(640,360);
  	colorMode(RGB);
  	var popmax = 10;
  	var mutationRate = 0.05;
  	population = new Population(mutationRate,popmax);
  	button = new Button(15,150,160,20, "evolve new generation");
}

function draw() {
  	background(255);
  	population.display();
  	population.rollover(mouseX,mouseY);
  	textAlign(LEFT);
  	fill(0);
  	text("Generation #:" + population.getGenerations(),15,190);
  	button.display();
  	button.rollover(mouseX,mouseY);
};

function mousePressed() {
  	if (button.clicked(mouseX,mouseY)) {
    		population.selection();
    		population.reproduction();
  	}
};

function mouseReleased() {
  	button.released();
};

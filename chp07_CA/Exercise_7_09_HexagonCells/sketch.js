var gol;

function setup() {
  createGraphics(640, 360);
  gol = new GOL();
}

function draw() {
  background(255);
  gol.display();
}

// reset board when mouse is pressed
function mousePressed() {
  gol.init();
}


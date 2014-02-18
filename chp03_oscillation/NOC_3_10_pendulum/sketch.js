var p;

function setup() {
  createGraphics(800, 200);

  p = new Pendulum(new PVector(width/2, 0), 175);
}

function draw() {
  background(255);
  p.go();
}

function mousePressed() {
  p.handleClick(mouseX, mouseY);
}

function mouseDragged() {
  p.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  p.stopDragging();
}

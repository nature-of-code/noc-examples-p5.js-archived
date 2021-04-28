let ca;

function setup() {
  frameRate(20);
  createCanvas(400, 400);
  ca = new CA();
}

function draw() {
  ca.generate();
  ca.rules();
  ca.display();
}

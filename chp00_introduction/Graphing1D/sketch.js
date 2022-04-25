// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let startX = 0;

function setup() {
  createCanvas(800, 600);
  stroke(255);
  noFill();
}

function draw() {
  background(150);

  const addingX = map(mouseY, 0, height, 0.01, 0.1);
  const detail = map(mouseX, 0, width, 0, 32);
  let xOff = startX;

  noiseDetail(detail);

  beginShape();
  for (let i = 0; i < width; i++) {
    vertex(i, noise(xOff) * height);
    xOff += 0.01;
  }
  endShape();

  startX += addingX;
}

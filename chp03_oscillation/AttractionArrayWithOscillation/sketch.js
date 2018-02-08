// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Attraction Array with Oscillating objects around each Crawler

// Click and drag attractive body to move throughout space

let crawlers = [];
let a;

function setup() {
  createCanvas(640, 360);
  // Some random bodies
  for (let i = 0; i < 6; i++) {
    crawlers[i] = new Crawler();
  }
  // Create an attractive body
  a = new Attractor(createVector(width / 2, height / 2), 20, 0.4);
}

function draw() {
  background(220);
  a.rollingover(mouseX, mouseY);
  a.go();

  for (let i = 0; i < crawlers.length; i++) {
    // Calculate a force exerted by "attractor" on "Crawler"
    let f = a.attract(crawlers[i]);
    // Apply that force to the Crawler
    crawlers[i].applyForce(f);
    // Update and render
    crawlers[i].update();
    crawlers[i].display();
  }


}

function mousePressed() {
  a.clicked(mouseX, mouseY);
}

function mouseReleased() {
  a.stopDragging();
}
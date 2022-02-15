// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
  createCanvas(640, 360);
  background(150);
}

function draw() {
  // Tell p5 we will work with pixels
  loadPixels();
  let xoff = 0.0;

  // Updating pixels with perlin noise
  for (let x = 0; x < width; x++) {
    let yoff = 0.0;

    for (let y = 0; y < height; y++) {
      // Calculating brightness value for noise
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      set(x, y, floor(bright));
      yoff += 0.01; // Incrementing y-offset perlins noise
    }
    xoff += 0.01; // Incrementing x-offset perlins noise
  }

  updatePixels();
}

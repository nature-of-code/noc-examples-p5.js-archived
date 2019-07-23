// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Attraction Array with Oscillating objects around each thing

class Oscillator {

  constructor(r) {

    // Initialize randomly
    this.theta = 0;
    this.amplitude = r;
  }

  // Update theta and offset
  update(thetaVel) {
    this.theta += thetaVel;
  }

  // Display based on a position
  display(pos) {
    let x = map(cos(this.theta), -1, 1, 0, this.amplitude);
    stroke(0);
    fill(50);
    line(0, 0, x, 0);
    ellipse(x, 0, 8, 8);
  }
}
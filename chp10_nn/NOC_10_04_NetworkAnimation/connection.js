// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

class Connection {
  constructor(from, to, w) {
    // Connection has a weight
    this.weight = w;
    // Connection is from Neuron A to B
    this.a = from;
    this.b = to;

    // Variables to track the animation
    this.sending = false;
    this.sender = createVector();

    // Need to store the output for when its time to pass along
    this.output = 0;
  }

  // Draw line and traveling circle
  show() {
    stroke(0);
    strokeWeight(this.weight * 4);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

    if (this.sending) {
      fill(0);
      strokeWeight(1);
      ellipse(this.sender.x, this.sender.y, 16, 16);
    }
  }

  // The Connection is active
  feedforward(val) {
    this.output = val * this.weight; // Compute output
    this.sender = this.a.position.copy(); // Start animation at Neuron A
    this.sending = true; // Turn on sending
  }

  // Update traveling sender
  update() {
    if (this.sending) {
      // Use a simple interpolation
      this.sender.x = lerp(this.sender.x, this.b.position.x, 0.1);
      this.sender.y = lerp(this.sender.y, this.b.position.y, 0.1);
      let d = p5.Vector.dist(this.sender, this.b.position);
      // If we've reached the end
      if (d < 1) {
        // Pass along the output!
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }



}
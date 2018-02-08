// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Attraction

// A class for a draggable attractive body in our world

class Attractor {

  constructor(pos, mass, g) {
    this.pos = pos.copy();
    this.mass = mass;
    this.G = g;
    this.dragOffset = createVector(0.0, 0.0);
    this.dragging = false;
    this.rollover = false;
  }

  go() {
    this.render();
    this.drag();
  }

  attract(crawler) {
    let dir = p5.Vector.sub(this.pos, crawler.pos); // Calculate direction of force
    let d = dir.mag(); // Distance between objects
    d = constrain(d, 5.0, 25.0); // Limiting the distance to eliminate "extreme" results for very close or very far objects
    dir.normalize(); // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    let force = (this.G * this.mass * crawler.mass) / (d * d); // Calculate gravitional force magnitude
    dir.mult(force); // Get force vector --> magnitude * direction
    return dir;
  }

  // Method to display
  render() {
    ellipseMode(CENTER);
    stroke(0, 100);
    if (this.dragging) fill(50);
    else if (this.rollover) fill(100);
    else fill(175, 50);
    ellipse(this.pos.x, this.pos.y, this.mass * 2, this.mass * 2);
  }

  // The methods below are for mouse interaction
  clicked(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.pos.x - mx;
      this.dragOffset.y = this.pos.y - my;
    }
  }

  rollingover(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.mass) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  stopDragging() {
    this.dragging = false;
  }



  drag() {
    if (this.dragging) {
      this.pos.x = mouseX + this.dragOffset.x;
      this.pos.y = mouseY + this.dragOffset.y;
    }
  }

}
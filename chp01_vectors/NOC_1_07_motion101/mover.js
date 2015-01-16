
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function() {
  
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(random(-2, 2), random(-2, 2));  

  this.update = function() {
    this.position.add(this.velocity);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
  };

  this.checkEdges = function() {

    if (this.position.x > width) {
      this.position.x = 0;
    } 
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } 
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  };
};




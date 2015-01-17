// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function() {
  this.position = createVector(width/2, height/2);
  this.velocity = createVector(3, 0);
  this.acceleration = createVector(0, 0);
  this.topspeed = 4;
  this.xoff = 1000;
  this.yoff = 0;
  this.r = 16;

  this.turnLeft = function() {
    var left = createVector(this.velocity.y,this.velocity.x*-1);
    left.normalize();
    left.mult(0.1);
    this.applyForce(left);
  }

  this.turnRight = function() {
    var left = createVector(this.velocity.y,this.velocity.x);
    left.normalize();
    left.mult(0.1);
    this.applyForce(left);
  }

  this.applyForce = function(force) {
    this.acceleration.add(force);
  }

  this.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function () {
    var angle = this.velocity.heading();
    
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(127, 127, 127);
    push();
    rectMode(CENTER);
    translate(this.position.x, this.position.y);
    rotate(angle);
    // draw the car
    fill(255, 0, 0);
    rect(0, 0, 70, 30);
    rect(0, 0, 29, 30);
    fill(79, 79, 79);
    ellipse(-15, -18, 20, 8);
    ellipse(-15, 18, 20, 8);
    ellipse(15, 18, 20, 8);
    ellipse(15, -18, 20, 8);
    rect(21, 0, 11, 26);
    pop();
  };

  this.checkEdges = function () {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    
    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  };
};


// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Rocket class -- this is just like our Boid / Particle class
// the only difference is that it has DNA & fitness


//constructor
function Rocket(pos, dna, totalRockets) {
  // All of our physics stuff
  this.acceleration = createVector();
  this.velocity = createVector();
  this.position = pos.copy();
  this.r = 4;
  this.dna = dna;
  this.finishTime = 0; // We're going to count how long it takes to reach target
  this.recordDist = 10000; // Some high number that will be beat instantly

  this.fitness = 0;
  this.geneCounter = 0;
  this.hitObstacle = false; // Am I stuck on an obstacle?
  this.hitTarget = false; // Did I reach the target


  // FITNESS FUNCTION
  // distance = distance from target
  // finish = what order did i finish (first, second, etc. . .)
  // f(distance,finish) =   (1.0f / finish^1.5) * (1.0f / distance^6);
  // a lower finish is rewarded (exponentially) and/or shorter distance to target (exponetially)
  this.fitness = function() {
    if (this.recordDist < 1) this.recordDist = 1;

    // Reward finishing faster and getting close
    this.fitness = (1 / (this.finishTime * this.recordDist));

    // Make the function exponential
    this.fitness = pow(this.fitness, 4);

    if (this.hitObstacle) this.fitness *= 0.1; // lose 90% of fitness hitting an obstacle
    if (this.hitTarget) this.fitness *= 2; // twice the fitness for finishing!
  }

  // Run in relation to all the obstacles
  // If I'm stuck, don't bother updating or checking for intersection
  this.run = function(os) {
    if (!this.hitObstacle && !this.hitTarget) {
      this.applyForce(this.dna.genes[this.geneCounter]);
      this.geneCounter = (this.geneCounter + 1) % this.dna.genes.length;
      this.update();
      // If I hit an edge or an obstacle
      this.obstacles(os);
    }
    // Draw me!
    if (!this.hitObstacle) {
      this.display();
    }
  }

  // Did I make it to the target?
  this.checkTarget = function() {
    var d = dist(this.position.x, this.position.y, target.position.x, target.position.y);
    if (d < this.recordDist) this.recordDist = d;

    if (target.contains(this.position) && !this.hitTarget) {
      this.hitTarget = true;
    } else if (!this.hitTarget) {
      this.finishTime++;
    }
  }

  // Did I hit an obstacle?
  this.obstacles = function(os) {
    for (var i = 0; i < os.length; i++) {
      var obs = os[i];
      if (obs.contains(this.position)) {
        this.hitObstacle = true;
      }
    }
  }

  this.applyForce = function(f) {
    this.acceleration.add(f);
  }


  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.display = function() {
    //background(255,0,0);
    var theta = this.velocity.heading() + PI / 2;
    fill(200, 100);
    stroke(0);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);

    // Thrusters
    rectMode(CENTER);
    fill(0);
    rect(-this.r / 2, this.r * 2, this.r / 2, this.r);
    rect(this.r / 2, this.r * 2, this.r / 2, this.r);

    // Rocket body
    fill(175);
    beginShape(TRIANGLES);
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape();

    pop();
  }

  this.getFitness = function() {
    return this.fitness;
  }

  this.getDNA = function() {
    return this.dna;
  }

  this.stopped = function() {
    return this.hitObstacle;
  }
}

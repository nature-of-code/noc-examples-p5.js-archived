function Rocket(l, dna_) {

  	this.location = l.get();
  	this.velocity = new PVector();
  	this.acceleration = new PVector();

  	this.r = 4;

  	this.fitness;
  	this.dna = dna_;

  	this.geneCounter = 0;
	this.hitTarget = false;
}

Rocket.prototype.fitness = function() {
    	var d = dist(this.location.x, this.location.y, target.x, target.y);
    	this.fitness = pow(1/d, 2);
}

Rocket.prototype.run = function() {
    	this.checkTarget();
    	if (this.hitTarget == false) {
      		this.applyForce(this.dna.genes[this.geneCounter]);
      		this.geneCounter = (this.geneCounter + 1) % this.dna.genes.length;
      		this.update();
    	}
    	this.display();
}

Rocket.prototype.checkTarget = function() {
    	var d = dist(this.location.x, this.location.y, target.x, target.y);
    	if (d < 12) {
 		this.hitTarget = true;
    	} 
}

Rocket.prototype.applyForce = function(f) {
    	this.acceleration.add(f);
}

Rocket.prototype.update = function() {
    	this.velocity.add(this.acceleration);
    	this.location.add(this.velocity);
    	this.acceleration.mult(0);
}

Rocket.prototype.display = function() {
    	var theta = this.velocity.heading() + PI/2;
    	fill(200, 100);
    	stroke(0);
    	pushMatrix();
    	translate(this.location.x, this.location.y);
    	rotate(theta);

    	rectMode(CENTER);
    	fill(0);
    	rect(-(this.r/2), this.r*2, this.r/2, this.r);
    	rect(this.r/2, this.r*2, this.r/2, this.r);

    	fill(175);
	stroke(0);
    	beginShape(TRIANGLES);
    	vertex(0, -(this.r)*2);
    	vertex(-(this.r), this.r*2);
    	vertex(this.r, this.r*2);
    	endShape(CLOSE);

    	popMatrix();
}

Rocket.prototype.getFitness = function() {
    	return this.fitness;
}

Rocket.prototype.getDNA = function() {
    return this.dna;
}


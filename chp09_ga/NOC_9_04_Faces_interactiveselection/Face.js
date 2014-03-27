function Face(dna_, x_, y_) {
	this.dna = dna_;
	this.fitness = 1;
	this.x = x_; 
    	this.y = y_;
  	this.wh = 70;
	this.rolloverOn;
  	this.r = new Rectangle(Math.floor(this.x-this.wh/2), Math.floor(this.y-this.wh/2), Math.floor(this.wh), Math.floor(this.wh));
}

Face.prototype.display = function() {
    	var r          = map(this.dna.genes[0],0,1,0,70);
    	var c          = color(this.dna.genes[1]*255,this.dna.genes[2]*255,this.dna.genes[3]*255);
    	var eye_y      = map(this.dna.genes[4],0,1,0,5);
    	var eye_x      = map(this.dna.genes[5],0,1,0,10);
    	var eye_size   = map(this.dna.genes[5],0,1,0,10);
    	var eyecolor   = color(this.dna.genes[4]*255,this.dna.genes[5]*255,this.dna.genes[6]*255);
    	var mouthColor = color(this.dna.genes[7]*255,this.dna.genes[8]*255,this.dna.genes[9]*255);
    	var mouth_y    = map(this.dna.genes[5],0,1,0,25);
    	var mouth_x    = map(this.dna.genes[5],0,1,-25,25);
    	var mouthw     = map(this.dna.genes[5],0,1,0,50);
    	var mouthh     = map(this.dna.genes[5],0,1,0,10);

    	pushMatrix();
    	translate(this.x, this.y);
    	noStroke();
    	// Head
    	fill(c);
    	ellipseMode(CENTER);
    	ellipse(0, 0, r, r);
    	// Eyes
    	fill(eyecolor);
    	rectMode(CENTER);
    	rect(-eye_x, -eye_y, eye_size, eye_size);
    	rect( eye_x, -eye_y, eye_size, eye_size);
    	//Mouth
    	fill(mouthColor);
    	rectMode(CENTER);
    	rect(mouth_x, mouth_y, mouthw, mouthh);
    	// Box
    	stroke(0.25);
    	if (this.rolloverOn) fill(0, 0.25);
    	else noFill();
    	rectMode(CENTER);
    	rect(0, 0, this.wh, this.wh);
    	popMatrix();
    	textAlign(CENTER);
    	if (this.rolloverOn) fill(0);
    	else fill(0.25);
    	text(Math.floor(this.fitness), this.x, this.y+55);
}

Face.prototype.getFitness = function() {
    	return this.fitness;
}

Face.prototype.getDNA = function() {
    	return this.dna;
}

Face.prototype.rollover = function(mx, my) {
    	if (this.r.contains(mx, my)) {
      		this.rolloverOn = true;
      		this.fitness += 0.25;
    	} else {
      		this.rolloverOn = false;
    	}
}


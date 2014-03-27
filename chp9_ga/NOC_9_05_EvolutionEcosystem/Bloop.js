function Bloop(l, dna_) {
  	this.location = l.get();
  	this.dna = dna_; 
  	this.health = 200;
	this.xoff = random(1000);
    	this.yoff = random(1000);
	this.maxspeed = map(this.dna.genes[0], 0, 1, 15, 0);
    	this.r = map(this.dna.genes[0], 0, 1, 0, 50);
	this.perlin = new Perlin();
}

Bloop.prototype.run = function() {
    	this.update();
    	this.borders();
    	this.display();
}

Bloop.prototype.eat = function(f) {
    	var food = f.getFood();
    	for (var i = food.length-1; i >= 0; i--) {
      		var foodLocation = food[i];
      		var d = PVector.dist(this.location, foodLocation);
      		if (d < this.r/2) {
        		this.health += 100; 
        		food.pop(i);
      		}
    	}
}

Bloop.prototype.reproduce = function() {
    	if (random(1) < 0.0005) {
      		var childDNA = this.dna.copy();
      		childDNA.mutate(0.01);
      		return new Bloop(location, childDNA);
    	} 
    	else {
      		return null;
    	}
}

Bloop.prototype.update = function() {
    	var vx = map(this.perlin.noise(this.xoff),0,1,-this.maxspeed,this.maxspeed);
    	var vy = map(this.perlin.noise(this.yoff),0,1,-this.maxspeed,this.maxspeed);
    	var velocity = new PVector(vx,vy);
    	this.xoff += 0.01;
    	this.yoff += 0.01;
    	this.location.add(velocity);
    	this.health -= 0.2;
}

Bloop.prototype.borders = function() {
    	if (this.location.x < -this.r) this.location.x = width+this.r;
    	if (this.location.y < -this.r) this.location.y = height+this.r;
    	if (this.location.x > width+this.r) this.location.x = -this.r;
    	if (this.location.y > height+this.r) this.location.y = -this.r;
}

Bloop.prototype.display = function() {
    	ellipseMode(CENTER);
    	stroke(0,this.health);
    	fill(0, this.health);
    	ellipse(this.location.x, this.location.y, this.r, this.r);
}

Bloop.prototype.dead = function() {
    	if (this.health < 0.0) {
      		return true;
    	} 
    	else {
      		return false;
    	}
}


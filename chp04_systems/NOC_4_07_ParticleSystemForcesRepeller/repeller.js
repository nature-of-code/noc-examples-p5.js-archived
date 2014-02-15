function Repeller(x, y){
	this.G = 100;
	this.position = new PVector(x, y);
	this.r = 10;
}

Repeller.prototype.display = function(){
	stroke(0);
    strokeWeight(2);
    fill(175);
    ellipse(this.position.x,this.position.y, 48, 48);
}

Repeller.prototype.repel = function(p){
	var dir = PVector.sub(this.position, p.position); // Calculate direction of force
	var d = dir.mag(); // Distance between objects
	dir.normalize(); // Normalize vector (distance doesn't matter here, we just want this vector for direction)
	d = constrain(d, 5, 100); // Keep distance within a reasonable range
	var force = -1 * this.G / (d * d); // Repelling force is inversely proportional to distance
	dir.mult(force); // Get force vector --> magnitude * direction
	return dir;
}
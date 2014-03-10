function KochLine(a, b) {
	this.start = a.get();
	this.end = b.get();
}

KochLine.prototype.display = function() {
	stroke(0);
	line(this.start.x, this.start.y, this.end.x, this.end.y);
}

KochLine.prototype.kochA = function() {
	return this.start.get();
}

KochLine.prototype.kochB = function() {
	var v = new PVector.sub(this.end, this.start);
	v.div(3);
	v.add(this.start);
	return v;
}

KochLine.prototype.kochC = function() {
	var a = this.start.get();
	var v = new PVector.sub(this.end, this.start);
	v.div(3);
	a.add(v);
	rotate(v, -radians(60));
	a.add(v);
	return a;
}

KochLine.prototype.kochD = function() {
	var v = new PVector.sub(this.end, this.start);
	v.mult(2/3.0);
	v.add(this.start);
	return v;
}

KochLine.prototype.kochE = function() {
	return this.end.get();
}

function rotate(v, theta) {
	var xTemp = v.x;
	v.x = v.x*cos(theta) - v.y*sin(theta);
	v.y = xTemp*sin(theta) + v.y*cos(theta);
}

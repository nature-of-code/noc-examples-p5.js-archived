function KochLine(start, end) {
	this.a = start.get();
	this.b = end.get();
}

KochLine.prototype.display = function() {
	stroke(0);
    	line(this.a.x, this.a.y, this.b.x, this.b.y);
}

KochLine.prototype.start = function() {
	return this.a.get();
}

KochLine.prototype.end = function() {
	return this.b.get();
}

KochLine.prototype.kochleft = function() {
    var v = PVector.sub(this.b, this.a);
    v.div(3);
    v.add(this.a);
    return v;
}

KochLine.prototype.kochmiddle = function() {
    var v = PVector.sub(this.b, this.a);
    v.div(3);
    
    var p = this.a.get();
    p.add(v);
    
    rotate(v,-radians(60));
    p.add(v);
    
    return p;
}

KochLine.prototype.kochright = function() {
    var v = PVector.sub(this.a, this.b);
    v.div(3);
    v.add(this.b);
    return v;
}

function rotate(v, theta) {
    var xTemp = v.x;
    v.x = v.x*cos(theta) - v.y*sin(theta);
    v.y = xTemp*sin(theta) + v.y*cos(theta);
}


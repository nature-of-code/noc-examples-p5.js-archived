function KochFractal() {
	this.start = new PVector(0,height-20);
	this.end = new PVector(width,height-20);
	this.lines = [];
	this.count;
	this.restart();
}

KochFractal.prototype.nextLevel = function() {
	this.lines = this.iterate(this.lines);
	this.count++;
}

KochFractal.prototype.restart = function() { 
	this.count = 0;
	this.lines.length=0;
    	this.lines.push(new KochLine(this.start, this.end));
}

KochFractal.prototype.getCount = function() {
    	return this.count;
}

KochFractal.prototype.render = function() {
	for (var l in this.lines) {
		var k = this.lines[l];
		k.display();
	}
}

KochFractal.prototype.iterate = function(before) {
	var now = [];

	for (var l in before) {
		var k = before[l];

		var a = k.start();
		var b = k.kochleft();
		var c = k.kochmiddle();
      		var d = k.kochright();
      		var e = k.end();

		now.push(new KochLine(a,b));
      		now.push(new KochLine(b,c));
      		now.push(new KochLine(c,d));
      		now.push(new KochLine(d,e));
	}
    	return now;
}

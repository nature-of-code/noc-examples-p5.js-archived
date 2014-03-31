var lines = [];

function setup() {
	createCanvas(383,200);
	background(255);
	var start = new PVector(0,150);
	var end = new PVector(width,150);
	lines.push(new KochLine(start, end));
	for (var i=0; i<5; i++) {
		generate();
	}
	smooth();
}

function draw() {
	background(255);
	for (var l in lines) {
		var k=lines[l];
		k.display();
	}
};

function generate() {
	var next = [];
	for (var l=0; l<lines.length; l++) {
		var k=lines[l];
		var a = k.kochA();
		var b = k.kochB();
		var c = k.kochC();
                var d = k.kochD();
		var e = k.kochE();

		next.push(new KochLine(a, b));
		next.push(new KochLine(b, c));
		next.push(new KochLine(c, d));
		next.push(new KochLine(d, e));
	}
	lines = next;
};

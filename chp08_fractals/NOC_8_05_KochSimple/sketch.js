// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Curve
// Renders a simple fractal, the Koch snowflake
// Each recursive level drawn in sequence

var lines = [];   // A list to keep track of all the lines

function setup() {
  createCanvas(383, 200);
  var start = createVector(0, 150);
  var end   = createVector(width, 150);
  lines.push(new KochLine(start, end));
  
  for (var i = 0; i < 5; i++) {
    generate();
  }
}

function draw() {
  background(51);
  for (var i = 0; i < lines.length; i++) {
  	var l = lines[i];
    l.display();
  }
}

function generate() {
  var next = [];    // Create emtpy list
  for (var i = 0; i < lines.length; i++) {
  	var l = lines[i];
    // Calculate 5 koch p5.Vectors (done for us by the line object)
    var a = l.kochA();                 
    var b = l.kochB();
    var c = l.kochC();
    var d = l.kochD();
    var e = l.kochE();
    // Make line segments between all the p5.Vectors and add them
    next.push(new KochLine(a, b));
    next.push(new KochLine(b, c));
    next.push(new KochLine(c, d));
    next.push(new KochLine(d, e));
  }
  lines = next;
}


var current = "A";
var count = 0;

function setup() {
	createCanvas(200, 200);
  	print("Generation " + count + ": " + current);
}

function draw() {
  	background(255);
  	fill(0);
  	text("Click mouse to generate", 10, height-20);
  	noLoop();
};

function mousePressed() {
  	var next = [];
  	for (var i = 0; i < current.length; i++) {
    		var c = current.charAt(i);
    		if (c == 'A') {
       			next.push("AB");
    		}
		else if (c == 'B') {
      			next.push("A");
    		}
  	}
  	current = next.toString();
  	count++;
  	println("Generation " + count + ": " + current);
  	println(count + " " + current.length);
};



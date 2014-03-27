createGraphics(1800,90);

function setup() {
	var w = 90;	
	var total = width/w;
	var cells = new Array(1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0);

	print("var cells = new Array(");
	for (var i = 0; i < cells.length; i++) {
  		if (cells[i] == 0) fill(255);
  		else fill(64);
  		stroke(0);
  		rect(i*w,0,w-1,w-1);
  		print(cells[i] +",");
	}
}

function draw() {
	noLoop();
}
//saveFrame("cells.png");









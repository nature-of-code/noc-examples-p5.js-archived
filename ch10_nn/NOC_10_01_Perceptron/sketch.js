// The Nature of Code
// http://natureofcode.com

// Neural Network: Perceptron

// Train a simple perceptron
// Draws a line, and train the perceptron to guess whether a random point 
// is above or below a line. 

var ptron;
var training = [];
var count = 0;

// calculate line
function f(x) {
	return 2 * x + 1;
}

function Trainer(x, y, a) {	
	this.inputs = [x, y, 1]; // 1 is bias
	this.answer = a;
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  
  ptron = new Perceptron(3);

  for (var i = 0; i < 2000; i++) {
  	var x = random(-width/2, width/2);
  	var y = random(-height/2, height/2);

  	var answer = 1;
  	if (y < f(x)) answer = -1;

  	training[i] = new Trainer(x, y, answer);
  }
  
};

function draw() {
  background(255);
  translate(width/2, height/2);

  // draw line
  stroke(126);
  line(-width/2, f(-width/2), width/2, f(width/2));


  // train one point at a time
  ptron.train(training[count].inputs, training[count].answer);
  count = (count + 1) % training.length;
  
  for (var i = 0; i < count; i++) {
  	stroke(0);
  	var guess = ptron.feedforward(training[i].inputs);
  	if (guess > 0) noFill();
  	else 		   fill(0);
  	ellipse(training[i].inputs[0], training[i].inputs[1], 8, 8);
  }  

};








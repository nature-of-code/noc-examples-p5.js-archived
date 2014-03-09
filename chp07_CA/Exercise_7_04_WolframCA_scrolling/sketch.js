var ca;


function setup() {
  	createGraphics(640, 800);
  	setFrameRate(24);
  	background(255);
  	//int[] ruleset = {0,1,1,1,1,0,1,1};   // Rule 222  
  	//int[] ruleset = {0,1,1,1,1,1,0,1};   // Rule 190  
  	//int[] ruleset = {0,1,1,1,1,0,0,0};   // Rule 30  
  	//int[] ruleset = {0,1,1,1,0,1,1,0};   // Rule 110
  	var ruleset = new Array(0,1,0,1,1,0,1,0);   // Rule 90
  
  	ca = new CA(ruleset);                 // Initialize CA
}

function draw() {
  	background(255);
  	ca.display();          // Draw the CA
  	ca.generate();
};

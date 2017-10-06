
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array to keep track of how often random numbers are picked

var randomCounts = [];
var total = 20; //Number of random  numbers we want to track

function setup() {
  createCanvas(640,360);
  for (var i = 0; i < total; i++) {
    randomCounts[i] = 0; // initializing all indexes in radomCounts[20] to 0;
  }
}

function draw() {
  background(127);//clears and re-draws canvas  background with grey color
  var index = floor(random(total));//return a random number between 0 and total(exclusive)
  randomCounts[index]++;

  // Draw a rectangle to graph results
  stroke(0); //black stroke
  strokeWeight(2); //stroke thickness of 2
  fill(255); //fill rectangle with white


  var w = width/total; //calculating width of each rectangle/ histogram 

  for (var x = 0; x < total; x++) {
    rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
  }
}

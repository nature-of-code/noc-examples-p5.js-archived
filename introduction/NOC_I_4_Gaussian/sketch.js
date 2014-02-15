
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
  createGraphics(640,360);
  background(127);  
};

function draw() {

  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  var xloc = randomGaussian();

  var sd = 60;                // Define a standard deviation
  var mean = width/2;         // Define a mean value (middle of the screen along the x-axis)
  xloc = ( xloc * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean

  fill(0, 10);
  noStroke();
  ellipse(xloc, height/2, 16, 16);   // Draw an ellipse at our "normal" random position

};


// Implements Polar Form of Box Muller transformation
function randomGaussian()  {
  do {
    var x1 = random(2) - 1;
    var x2 = random(2) - 1;
    var w = x1 * x1 + x2 * x2;
  } while (w >= 1);
  w = sqrt((-2 * log(w))/w);
  return x1 * w;
}


/*var y2;
var previous = false;

// Implements Polar Form of Box Muller transformation
function randomGaussian()  {
  if (previous) {
    var y1 = y2;
    previous = false;
  } else {
    do {
      var x1 = random(2) - 1;
      var x2 = random(2) - 1;
      var w = x1 * x1 + x2 * x2;
    } while (w >= 1);

    w = sqrt((-2 * log(w))/w);
    y1 = x1 * w;
    y2 = x2 * w;
    previous = true;
  }
  return y1;
}*/


/*function randomGaussian() {
   var a = random();
   var b = random();
   var normal = sqrt(-2 * log(a)) * cos(TWO_PI * b);
   return normal;
}*/
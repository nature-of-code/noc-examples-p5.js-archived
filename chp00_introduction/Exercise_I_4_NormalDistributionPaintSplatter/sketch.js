/*
Consider a simulation of paint splatter drawn as a collection of colored dots. 
Most of the paint clusters around a central position, but some dots do splatter 
out towards the edges. Can you use a normal distribution of random numbers to 
generate the positions of the dots? Can you also use a normal distribution of 
random numbers to generate a color palette? Try attaching a slider to standard deviation.
*/

let slider;

function setup() {
  createCanvas(640,360);
  background(255);
  slider = createSlider(0, 65, 20);
  slider.position(width/2, 10);
  slider.style('width', '150px');
  textSize(18);
  text('Adjust standard deviation', 90, 15);
}

function draw() {

  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  let xloc = randomGaussian();
  let yloc = randomGaussian();

  const sd = slider.value();                // Define a standard deviation
  const xMean = width/2; 
  const yMean = height/2;        // Define a mean value (middle of the screen along the x-axis)
  xloc = ( xloc * sd ) + xMean;  // Scale the gaussian random number by standard deviation and mean
  yloc = ( yloc * sd ) + yMean;

  let red = randomGaussian();
  let blue = randomGaussian();

  red = ( red * sd ) + 255 / 2;
  blue = ( blue * sd ) + 255 / 2;

  
  fill (red, 0, blue, 100);
  noStroke();
  ellipse(xloc, yloc + 15, 16, 16);   // Draw an ellipse at our "normal" random position

}
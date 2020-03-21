/*
  Consider a simulation of paint splatter drawn as a collection of colored dots. 
  Most of the paint clusters around a central position, but some dots do splatter 
  out towards the edges. Can you use a normal distribution of random numbers to 
  generate the positions of the dots? Can you also use a normal distribution of 
  random numbers to generate a color palette? Try attaching a slider to standard 
  deviation.
*/

function setup() {
  createCanvas(450, 450);
  background(255);
  textSize(15);

  // create sliders
  sdSlider = createSlider(5, 50, 25);
  sdSlider.position(20, 25);
}

function draw() {
  //get 3 gaussian random numbers w/ mean of 0 and standard deviation of 1.0
  let r = randomGaussian();
  let g = randomGaussian();
  let b = randomGaussian();

  //define standard deviation and mean
  let sd = 20; let mean = 200;
  //scale by standard deviation and mean
  //also constrain to between (0,255) since we are dealing with color
  r = constrain((r * sd) + mean,0,255);

  //repeat for g & b
  sd = 50; mean = 0;
  g = constrain((g * sd) + mean,0,255);
  sd = 100; mean = 100;
  b = constrain((b * sd) + mean,0,255);

  //get more gaussian numbers, this time for position
  let xloc = randomGaussian();
  let yloc = randomGaussian();

  sd = sdSlider.value();
  mean = width/2;
  xloc = ( xloc * sd ) + mean;
  yloc = ( yloc * sd ) + mean;

  fill(0, 0, 0);
  text('change the position standard deviation', sdSlider.x * 2 + sdSlider.width, 30);

  //draw an ellipse with gaussian generated color and position
  noStroke();
  fill(r,g,b);
  ellipse(xloc,yloc,8,8);
}
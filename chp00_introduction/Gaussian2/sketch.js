// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
    createCanvas(200,200);
    background(0);
}
  
function draw() {
    //create an alpha blended background
    fill(0,1);
    rect(0,0,width,height);

    //get 3 gaussian random numbers w/ mean of 0 and standard deviation of 1.0
    let r = randomGaussian();
    let g = randomGaussian();
    let b = randomGaussian();

    //define standard deviation and mean
    let sd = 100; let mean = 100;
    //scale by standard deviation and mean
    //also constrain to between (0,255) since we are dealing with color
    r = constrain((r * sd) + mean,0,255);

    //repeat for g & b
    sd = 20; mean = 200;
    g = constrain((g * sd) + mean,0,255);
    sd = 50; mean = 0;
    b = constrain((b * sd) + mean,0,255);

    //get more gaussian numbers, this time for position
    let xloc = randomGaussian();
    let yloc = randomGaussian();
    sd = width/10;
    mean = width/2;
    xloc = ( xloc * sd ) + mean;
    yloc = ( yloc * sd ) + mean;

    //draw an ellipse with gaussian generated color and position
    noStroke();
    fill(r,g,b);
    ellipse(xloc,yloc,8,8);
}
  
  
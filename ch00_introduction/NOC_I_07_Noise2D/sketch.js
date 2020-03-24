// Daniel Shiffman
// The Nature of Code
// http://natureofcode.com

let increment = 0.02;

function setup() {
  createCanvas(640,360);
  pixelDensity(1);
  noLoop();
}

function draw() {
  background(0);
  
  // Optional: adjust noise detail here
  // noiseDetail(8,0.65f);
  
  loadPixels();

  let xoff = 0.0; // Start xoff at 0
  
  // For every x,y coordinate in a 2D space, calculate a noise value and produce a brightness value
  for (let x = 0; x < width; x++) {
    xoff += increment;   // Increment xoff 
    let yoff = 0.0;   // For every xoff, start yoff at 0
    for (let y = 0; y < height; y++) {
      yoff += increment; // Increment yoff
      
      // Calculate noise and scale by 255
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);

      // Try using this line instead
      //let bright = random(0,255);
      
      // Set each pixel onscreen to a grayscale value
      let index = (x + y * width) * 4;
        
      pixels[index ] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright;
    }
  }
  
  updatePixels();
}

const increment = 0.01;

// The noise function's 3rd argument, a global variable that increments once per cycle
let zoff = 0.0;
// We will increment zoff differently than xoff and yoff
const zincrement = 0.07; 

function setup() {
    createCanvas(640, 360);
    pixelDensity(1);
}

function draw() {
    background(0);
    // Optional: adjust noise detail here
    // noiseDetail(8,0.65f);

    loadPixels();

    let redxoff = 25.0;
    let greenxoff = 35.0;
    let bluexoff = 45.0;

    // For every x,y coordinate in a 2D space, calculate a noise value and produce a brightness value
    for (let x = 0; x < width; x++) {

        redxoff += increment;
        greenxoff += increment;
        bluexoff += increment;

        let redyoff = 10.0;
        let greenyoff = 20.0;
        let blueyoff = 30.0;
        for (let y = 0; y < height; y++) {
            
            let red = map(noise(redxoff, redyoff, zoff), 0, 1, 0, 255);
            let green = map(noise(greenxoff, greenyoff, zoff), 0, 1, 0, 255);
            let blue = map(noise(bluexoff, blueyoff, zoff), 0, 1, 0, 255);

            let index = (x + y * width) * 4;
        
            pixels[index ] = red;
            pixels[index + 1] = green;
            pixels[index + 2] = blue;

            redyoff += increment;
            greenyoff += increment;
            blueyoff += increment;
        }
    }
    updatePixels();
  
    zoff += zincrement; // Increment zoff
}
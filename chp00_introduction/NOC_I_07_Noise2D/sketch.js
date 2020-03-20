let increment = 0.02;

function setup() {
    createCanvas(640, 360);
    noLoop();
    pixelDensity(1);
}

function draw() {
    background(0);

    // Optional: adjust noise detail here
    // noiseDetail(8,0.65f);

    loadPixels();

    let xoff = 0.0;

    for (let x = 0; x < width; x++) {
        let yoff = 0.0;
        for (let y = 0; y < height; y++) {
            let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
            let index = (x + y * width) * 4;
            pixels[index ] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            yoff += 0.01;
        }
        xoff += 0.01;
    }
    updatePixels();
}
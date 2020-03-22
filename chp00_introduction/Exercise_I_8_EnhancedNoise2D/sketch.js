function setup() {
    createCanvas(640, 360);
    noLoop();
    pixelDensity(1);
}

function draw() {
    background(0);
    noiseDetail(floor(random(1, 10)));
    loadPixels();

    let redxoff = 25.0;
    let greenxoff = 35.0;
    let bluexoff = 45.0;
    for (let x = 0; x < width; x++) {
        let redyoff = 10.0;
        let greenyoff = 20.0;
        let blueyoff = 30.0;
        for (let y = 0; y < height; y++) {

            let red = map(noise(redxoff, redyoff), 0, 1, 0, 255);
            let green = map(noise(greenxoff, greenyoff), 0, 1, 0, 255);
            let blue = map(noise(bluexoff, blueyoff), 0, 1, 0, 255);

            let index = (x + y * width) * 4;
            pixels[index ] = red;
            pixels[index + 1] = green;
            pixels[index + 2] = blue;

            redyoff += 0.004;
            greenyoff += 0.009;
            blueyoff += 0.008;
        }
        redxoff += 0.002;
        greenxoff += 0.003;
        bluexoff += 0.007;

    }
    updatePixels();
}
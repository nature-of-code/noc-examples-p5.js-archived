// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A basic implementation of John Conway's Game of Life CA
// how could this be improved to use object oriented programming?
// think of it as similar to our particle system, with a "cell" class
// to describe each individual cell and a "cellular automata" class
// to describe a collection of cells

var gol;

function setup() {
    createCanvas(640, 360);
    gol = new GOL();
}

function draw() {
    background(255);
    gol.generate();
    gol.display();
}

// reset board when mouse is pressed
function mousePressed() {
    gol.init();
}

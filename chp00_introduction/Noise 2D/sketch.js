
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


function setup() {

  createCanvas(640,360);
  background(150);

}

function draw() {

  loadPixels(); //tell p5 we will work with pixels
  var xoff = 0.0;

  //getting individual pixels on canvas and updating them with perlins noise
  for(var x = 0; x < width; x++){

    var yoff = 0.0;

    for(var y = 0; y < height; y++){

      var bright = map(noise(xoff,yoff),0,1,0,255);
      set(x, y ,floor(bright)); //setting pixel color to bright   
      yoff += 0.01; //incrementing y-offset perlins noise

    }
    xoff += 0.01; //incrementing x-offset perlins noise

  }

  updatePixels();//update pixels on canvas

}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flow Field Following


function FlowField(r) {
  // How large is each "cell" of the flow field
  this.resolution = r;
  // Determine the number of columns and rows based on sketch's width and height
  this.cols = width/this.resolution;
  this.rows = height/this.resolution;
  // A flow field is a two dimensional array of PVectors
  this.field = make2Darray(this.cols);
  this.init();
}

// We can't make 2D arrays, but this is sort of faking it
var make2Darray = function(n) {
  var array = [];
  for (var i = 0; i < n; i++) {
     array[i] = [];
  }
  return array;
}

FlowField.prototype.init = function() {
  // Reseed noise so we get a new flow field every time
  // Need to get noise working
  // noiseSeed(Math.floor(random(10000)));
  var xoff = 0;
  for (var i = 0; i < this.cols; i++) {
    var yoff = 0;
    for (var j = 0; j < this.rows; j++) {
<<<<<<< HEAD
      //var theta = map(noise(xoff,yoff),0,1,0,TWO_PI);
      var theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
=======
      var theta = map(noise(xoff,yoff),0,1,0,TWO_PI);
      //var theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
      // Polar to cartesian coordinate transformation to get x and y components of the vector
      this.field[i][j] = new PVector(cos(theta),sin(theta));
      yoff += 0.1;
    }
    xoff += 0.1;
  }
}

// Draw every vector
FlowField.prototype.display = function() {
  for (var i = 0; i < this.cols; i++) {
    for (var j = 0; j < this.rows; j++) {
      drawVector(this.field[i][j],i*this.resolution,j*this.resolution,this.resolution-2);
    }
  }
}

FlowField.prototype.lookup = function(lookup) {
  var column = Math.floor(constrain(lookup.x/this.resolution,0,this.cols-1));
  var row = Math.floor(constrain(lookup.y/this.resolution,0,this.rows-1));
  //println(lookup.x);
  return this.field[column][row].get();
}

// Renders a vector object 'v' as an arrow and a location 'x,y'
var drawVector = function(v, x, y, scayl) {
  pushMatrix();
  var arrowsize = 4;
  // Translate to location to render vector
  translate(x,y);
  stroke(200,100);
  // Call vector heading function to get direction (note that pointing to the right is a heading of 0) and rotate
  rotate(v.heading());
  // Calculate length of vector & scale it to be bigger or smaller if necessary
  var len = v.mag()*scayl;
  // Draw three lines to make an arrow (draw pointing up since we've rotate to the proper direction)
  line(0,0,len,0);
  //line(len,0,len-arrowsize,+arrowsize/2);
  //line(len,0,len-arrowsize,-arrowsize/2);
  popMatrix();
}







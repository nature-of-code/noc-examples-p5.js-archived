// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Path Following


function Path() {
  // A path has a radius, i.e how far is it ok for the vehicle to wander off
  this.radius = 20;
  // A Path is an array of points (PVector objects)
  this.points = [];
}

// Add a point to the path
Path.prototype.addPoint = function(x, y) {
  var point = new PVector(x, y);
  this.points.push(point);
}

Path.prototype.getStart = function() {
   return this.points[0];
}

Path.prototype.getEnd = function() {
   return this.points[this.points.length-1];
}


// Draw the path
Path.prototype.display = function() {
  // Draw thick line for radius
  stroke(99);
  strokeWeight(this.radius*2);
  noFill();
  beginShape();
  for (var i = 0; i < this.points.length; i++) {
    vertex(this.points[i].x, this.points[i].y);
  }
  endShape();
  // Draw thin line for center of path
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < this.points.length; i++) {
    vertex(this.points[i].x, this.points[i].y);
  }
  endShape();
}




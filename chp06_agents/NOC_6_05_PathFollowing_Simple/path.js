// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Path Following



function Path() {
  // A path has a radius, i.e how far is it ok for the boid to wander off
  this.radius = 20;
  // A Path is line between two points (PVector objects)
  this.start = new PVector(0,height/3);
  this.end = new PVector(width,2*height/3);
}

// Draw the path
Path.prototype.display = function() {

  strokeWeight(this.radius*2);
  stroke(200,100);
  line(this.start.x,this.start.y,this.end.x,this.end.y);

  strokeWeight(1);
  stroke(200);
  line(this.start.x,this.start.y,this.end.x,this.end.y);
}











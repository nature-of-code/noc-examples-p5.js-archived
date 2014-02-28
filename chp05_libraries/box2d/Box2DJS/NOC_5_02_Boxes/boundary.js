// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

  // A boundary is a simple rectangle with x,y,width,and height
function Boundary(x_,y_, w_, h_) {
  // But we also have to make a body for box2d to know about it
  // Body b;

  this.x = x_;
  this.y = y_;
  this.w = w_;
  this.h = h_;

  // Add the box to the box2d world
  // We need to keep track of a Body and a width and height
  var boxSd = new b2BoxDef();
  boxSd.density = 0.0;
  boxSd.friction = 0.3;
  boxSd.restitution = 0.5;  
  boxSd.extents.Set(this.w/2, this.h/2);
  var boxBd = new b2BodyDef();
  boxBd.AddShape(boxSd);
  boxBd.position.Set(this.x,this.y);
  this.body = world.CreateBody(boxBd);

  // Define the polygon
  // PolygonShape ps = new PolygonShape();
  // Figure out the box2d coordinates
  //float box2dW = box2d.scalarPixelsToWorld(w/2);
  //float box2dH = box2d.scalarPixelsToWorld(h/2);
  // We're just a box
  //ps.setAsBox(box2dW, box2dH);
}

  // Draw the boundary, if it were at an angle we'd have to do something fancier
Boundary.prototype.display = function() {
  fill(127);
  stroke(0);
  rectMode(CENTER);
  rect(this.x,this.y,this.w,this.h);
}



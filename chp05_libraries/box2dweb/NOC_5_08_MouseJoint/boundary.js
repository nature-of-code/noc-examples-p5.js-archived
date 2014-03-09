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

  var fd = new FixtureDef();
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;
 
  var bd = new BodyDef();
 
  bd.type = Body.b2_staticBody;
  bd.position.x = (this.x-transX)/scaleFactor;
  bd.position.y = (this.y-transY)/scaleFactor;
  fd.shape = new PolygonShape();
  fd.shape.SetAsBox(this.w/(scaleFactor*2), this.h/(scaleFactor*2));
  this.body = world.CreateBody(bd).CreateFixture(fd);
}

  // Draw the boundary, if it were at an angle we'd have to do something fancier
Boundary.prototype.display = function() {
  fill(127);
  stroke(127);
  rectMode(CENTER);
  rect(this.x,this.y,this.w,this.h);
}



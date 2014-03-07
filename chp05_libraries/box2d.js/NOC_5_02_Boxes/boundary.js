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

  var bd = new BodyDef();
  bd.set_type(Box2D.b2_staticBody);
  bd.set_position(translateToWorld(this.x,this.y));
 
  // Define a shape
  var ps = new PolygonShape();
  ps.SetAsBox(translateToWorld(this.w/2), translateToWorld(this.h/2));

  var fd = new FixtureDef();
  fd.set_density(1.0);
  fd.set_friction(0.5);
  fd.set_restitution(0.2);
 
  fd.set_shape(ps);
  
  this.body = world.CreateBody(bd);
  this.body.CreateFixture(fd);
}

  // Draw the boundary, if it were at an angle we'd have to do something fancier
Boundary.prototype.display = function() {
  fill(127);
  stroke(0);
  rectMode(CENTER);
  rect(this.x,this.y,this.w,this.h);
}



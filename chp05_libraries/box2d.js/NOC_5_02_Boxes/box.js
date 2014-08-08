// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function Box(x, y) {
  this.w = random(4, 16);
  this.h = random(4, 16);

   // Define a body
  var bd = new BodyDef();
  bd.set_type(Box2D.b2_dynamicBody);
  bd.set_position(translateToWorld(x,y));
  
  // Define a shape
  var ps = new PolygonShape();
  ps.SetAsBox(translateToWorld(this.w/2), translateToWorld(this.h/2));
  
  // Define a fixture
  var fd = new FixtureDef();
  // Fixture holds shape
  fd.set_shape(ps);
  
  // Some physics
  fd.set_density(1.0);
  fd.set_friction(0.5);
  fd.set_restitution(0.2);
 
  // Create the body
  this.body = world.CreateBody(bd);
  this.body.CreateFixture(fd);

  // Some additional stuff
  this.body.SetLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5,5));
}

// This function removes the particle from the box2d world
Box.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Box.prototype.done = function() {
 // Get the body's "transform"
  var pos = translateToPixels(this.body.GetPosition());

  // Is it off the bottom of the screen?
  if (pos.get_y() > height+this.w*this.h) {
    this.killBody();
    return true;
  }
  return false;
}

// Drawing the box
Box.prototype.display = function() {

 // Get the body's "transform"
  var pos = translateToPixels(this.body.GetPosition());
  // Get its angle of rotation
  var a = this.body.GetAngle();
  
  // Draw it!
  rectMode(CENTER);
  push();
  translate(pos.get_x(),pos.get_y());
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  rect(0, 0, this.w, this.h);
  pop();
}



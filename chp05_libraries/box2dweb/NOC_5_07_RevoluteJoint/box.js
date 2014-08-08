// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function Box(x, y, w, h, lock) {
  this.w = w;
  this.h = h;

  // Define a body
  var bd = new BodyDef();
  if (lock) bd.type = Body.b2_staticBody;
  else bd.type = Body.b2_dynamicBody;
  bd.position = translateToWorld(x,y);

  // Define a fixture
  var fd = new FixtureDef();
  // Fixture holds shape
  fd.shape = new PolygonShape();
  fd.shape.SetAsBox(translateToWorld(this.w/2), translateToWorld(this.h/2));
  
  // Some physics
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
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
  // Let's find the screen position of the particle
  var transform = this.body.GetTransform();
  var pos = translateToPixels(transform.position);
  // Is it off the bottom of the screen?
  if (pos.y > height+this.w*this.h) {
    this.killBody();
    return true;
  }
  return false;
}

// Drawing the box
Box.prototype.display = function() {

  // Get the body's "transform"
  var transform = this.body.GetTransform();
  // Convert to pixel coordinates
  var pos = translateToPixels(transform.position);
  // Get its angle of rotation
  var a = transform.GetAngle();
  
  // Draw it!
  rectMode(CENTER);
  push();
  translate(pos.x,pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  rect(0, 0, this.w, this.h);
  pop();
}



// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function Lollipop(x, y) {
  this.w = 8;
  this.h = 24;
  this.r = 8;

  // Define a body
  var bd = new BodyDef();
  bd.type = Body.b2_dynamicBody;
  bd.position = translateToWorld(x,y);

  // Define fixture #1
  var fd1 = new FixtureDef();
  // Fixture holds shape
  fd1.shape = new PolygonShape();
  fd1.shape.SetAsBox(translateToWorld(this.w/2), translateToWorld(this.h/2));
  fd1.density = 1.0;
  fd1.friction = 0.5;
  fd1.restitution = 0.2;
 
  // Define fixture #2
  var fd2 = new FixtureDef();
  fd2.shape = new CircleShape();
  fd2.shape.m_radius = scaleToWorld(this.r);
  var offset = scaleToWorld(new Vec2(0,-this.h/2));
  fd2.shape.m_p = new Vec2(offset.x,offset.y);
  fd2.density = 1.0;
  fd2.friction = 0.5;
  fd2.restitution = 0.2;

  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd1);
  this.body.CreateFixture(fd2);

  // Some additional stuff
  this.body.SetLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5,5));
}

// This function removes the particle from the box2d world
Lollipop.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Lollipop.prototype.done = function() {
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
Lollipop.prototype.display = function() {

  // Get the body's "transform"
  var transform = this.body.GetTransform();
  // Convert to pixel coordinates
  var pos = translateToPixels(transform.position);
  // Get its angle of rotation
  var a = transform.GetAngle();
  
  // Draw it!
  rectMode(CENTER);
  pushMatrix();
  translate(pos.x, pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);

  rect(0,0,this.w,this.h);
  ellipse(0, -this.h/2, this.r*2, this.r*2);
  popMatrix();
}



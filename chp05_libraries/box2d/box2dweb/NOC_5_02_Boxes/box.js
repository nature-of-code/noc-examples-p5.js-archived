// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function Box(x, y) {
  this.w = random(4, 16);
  this.h = random(4, 16);

  // Add the box to the box2d world
  // We need to keep track of a Body and a width and height
  var fd = new FixtureDef();
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;
 
  var bd = new BodyDef();

  bd.type = Body.b2_dynamicBody;
  bd.position = pixelsToWorld(x,y);
  fd.shape = new PolygonShape();
  fd.shape.SetAsBox(pixelsToWorld(this.w/2), pixelsToWorld(this.h/2));
  this.body = world.CreateBody(bd);
  this.body.CreateFixture(fd);

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
  var pos = worldToPixels(transform.position);
  // Is it off the bottom of the screen?
  if (pos.y > height+this.w*this.h) {
    this.killBody();
    return true;
  }
  return false;
}

// Drawing the box
Box.prototype.display = function() {
  var transform = this.body.GetTransform();
  var pos = worldToPixels(transform.position);
  // Get its angle of rotation
  var a = transform.GetAngle();

  rectMode(CENTER);
  pushMatrix();
  translate(pos.x,pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  rect(0, 0, this.w, this.h);
  popMatrix();
}



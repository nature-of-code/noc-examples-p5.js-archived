// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function Box(x, y) {
  this.w = 24;
  this.h = 24;

  // Define a body
  var bd = new BodyDef();
  bd.type = Body.b2_dynamicBody;
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

Box.prototype.contains = function(x,y) {
  var worldPoint = translateToWorld(x, y);
  var f = this.body.GetFixtureList();
  var inside = f.TestPoint(worldPoint);
  return inside;
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
  pushMatrix();
  translate(pos.x,pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  rect(0, 0, this.w, this.h);
  popMatrix();
}



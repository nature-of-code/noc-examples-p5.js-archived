// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box

function Box(x, y) {
  this.w = 16;
  this.h = 16;

   // Define a body
  var bd = new BodyDef();
  bd.type = Body.b2_dynamicBody;
  bd.position = pixelsToWorld(x,y);

  // Define a fixture
  var fd = new FixtureDef();
  // Fixture holds shape
  fd.shape = new PolygonShape();
  fd.shape.SetAsBox(pixelsToWorld(this.w/2), pixelsToWorld(this.h/2));
  
  // Some physics
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd);

}

// Drawing the box
Box.prototype.display = function() {
 // Get the body's "transform"
  var transform = this.body.GetTransform();
  // Convert to pixel coordinates
  var pos = worldToPixels(transform.position);
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



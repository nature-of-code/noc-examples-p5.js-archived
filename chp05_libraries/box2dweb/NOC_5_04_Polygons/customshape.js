// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function CustomShape(x, y) {

  // Define a body
  var bd = new BodyDef();
  bd.type = Body.b2_dynamicBody;
  bd.position = translateToWorld(x,y);

  // Define a fixture
  var fd = new FixtureDef();

  var vertices = [];
  vertices[3] = scaleToWorld(new Vec2(-15, 25));
  vertices[2] = scaleToWorld(new Vec2(15, 0));
  vertices[1] = scaleToWorld(new Vec2(20, -15));
  vertices[0] = scaleToWorld(new Vec2(-10, -10));

  // Fixture holds shape
  fd.shape = new PolygonShape();
  fd.shape.SetAsArray(vertices,vertices.length);
  //println(fd.shape);

  //fd.shape.SetAsBox(scaleToWorld(10),scaleToWorld(10));

  // Some physics
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd);

  // Some additional stuff
  //this.body.SetLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
  //this.body.SetAngularVelocity(random(-5,5));
}

// This function removes the particle from the box2d world
CustomShape.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
CustomShape.prototype.done = function() {
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
CustomShape.prototype.display = function() {

  // Get the body's "transform"
  var transform = this.body.GetTransform();

  // Convert to pixel coordinates
  var pos = translateToPixels(transform.position);
  
  // Get its angle of rotation
  var a = transform.GetAngle();
  
  // Draw it!
  var f = this.body.GetFixtureList();
  var ps = f.GetShape();

  rectMode(CENTER);
  pushMatrix();
  translate(pos.x,pos.y);
  //println(pos.x + " " + pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(0,0,20,20);
  beginShape();
  // For every vertex, convert to pixel vector
  for (var i = 0; i < ps.GetVertexCount(); i++) {
    var v = scaleToPixels(ps.GetVertices()[i]);
    vertex(v.x, v.y);
  }
  endShape(CLOSE);
  popMatrix();
}



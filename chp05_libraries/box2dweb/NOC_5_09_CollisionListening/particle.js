// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A circular particle

// Constructor
function Particle(x,y,r) {
  this.r = r;

  this.col = color(127);

  // Define a body
  var bd = new BodyDef();
  bd.type = Body.b2_dynamicBody;
  bd.position = translateToWorld(x,y);

  // Define a fixture
  var fd = new FixtureDef();
  // Fixture holds shape
  fd.shape = new CircleShape();
  fd.shape.m_radius = scaleToWorld(this.r);
  
  // Some physics
  fd.density = 1.0;
  fd.friction = 0.1;
  fd.restitution = 0.3;
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd);

  // Some additional stuff
  this.body.SetLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5,5));

  this.body.SetUserData(this);
}

// Change color when hit
Particle.prototype.change = function() {
  this.col = color(255, 0, 0);
}

// This function removes the particle from the box2d world
Particle.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Particle.prototype.done = function() {
  // Let's find the screen position of the particle
  var transform = this.body.GetTransform();
  var pos = translateToPixels(transform.position);
  // Is it off the bottom of the screen?
  if (pos.y > height+this.r*2) {
    this.killBody();
    return true;
  }
  return false;
}

// Drawing the box
Particle.prototype.display = function() {

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
  fill(this.col);
  stroke(200);
  strokeWeight(2);
  ellipse(0,0,this.r*2,this.r*2);
  // Let's add a line so we can see the rotation
  line(0,0,this.r,0);
  pop();
}



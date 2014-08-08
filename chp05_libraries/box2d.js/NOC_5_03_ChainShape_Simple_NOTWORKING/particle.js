// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
function Particle(x,y,r) {
  this.r = r;

  // Define a body
  var bd = new BodyDef();
  bd.set_type(Box2D.b2_dynamicBody);
  bd.set_position(translateToWorld(x,y));

  var cs = new CircleShape();
  cs.set_m_radius(translateToWorld(this.r));

  // Define a fixture
  var fd = new FixtureDef();
  // Fixture holds shape
  fd.set_shape(cs);
  
  // Some physics
  fd.set_density(1.0);
  fd.set_friction(0.5);
  fd.set_restitution(0.2);
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd);

  // Some additional stuff
  this.body.SetLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5,5));
}

// This function removes the particle from the box2d world
Particle.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Particle.prototype.done = function() {
  // Let's find the screen position of the particle
  var pos = translateToPixels(this.body.GetPosition());

  // Is it off the bottom of the screen?
  if (pos.get_y() > height+this.r*2) {
    this.killBody();
    return true;
  }
  return false;
}

// Drawing the Particle
Particle.prototype.display = function() {

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
  ellipse(0,0,this.r*2,this.r*2);
  // Let's add a line so we can see the rotation
  line(0,0,this.r,0);
  pop();
}



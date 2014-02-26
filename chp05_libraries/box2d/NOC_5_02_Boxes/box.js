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
  var boxSd = new b2BoxDef();
  boxSd.density = 1.0;
  boxSd.friction = 0.3;
  boxSd.restitution = 0.5;  
  boxSd.extents.Set(this.w/2, this.h/2);
  var boxBd = new b2BodyDef();
  boxBd.AddShape(boxSd);
  boxBd.position.Set(x,y);
  boxBd.linearVelocity = new b2Vec2(random(-50, 50), random(20, 50));
  boxBd.angularVelocity = random(-5,5);

  this.body = world.CreateBody(boxBd);
  //this.body.m_linearvelocity = new b2Vec2(random(-500, 500), random(200, 500));
  //this.body.SetLinearVelocity());
  //this.body.setAngularVelocity(random(-5, 5));
}

// This function removes the particle from the box2d world
Box.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Box.prototype.done = function() {
  // Let's find the screen position of the particle
  var s = this.body.GetShapeList(); 
  var pos = s.m_position;
  // Is it off the bottom of the screen?
  if (pos.y > height+this.w*this.h) {
    this.killBody();
    return true;
  }
  return false;
}

// Drawing the box
Box.prototype.display = function() {
  // We look at each body and get its screen position
  //for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
    //drawShape(s, context);
  //}
  var s = this.body.GetShapeList(); 
  var pos = s.m_position;
  // Get its angle of rotation
  var a = this.body.m_rotation;

  rectMode(CENTER);
  pushMatrix();
  translate(pos.x, pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  rect(0, 0, this.w, this.h);
  popMatrix();
}



// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Class to describe the spring joint (displayed as a line)

// Constructor
function Spring(x,y) {
  // At first it doesn't exist
  this.mouseJoint = null;
}

// If it exists we set its target to the mouse location 
Spring.prototype.update = function(x, y) {
  if (this.mouseJoint != null) {
    // Always convert to world coordinates!
    var mouseWorld = translateToWorld(x,y);
    this.mouseJoint.SetTarget(mouseWorld);
  }
}

Spring.prototype.display = function() {
  if (this.mouseJoint != null) {
    // We can get the two anchor points
    var v1 = new Vec2(0,0);
    this.mouseJoint.GetAnchorA(v1);
    var v2 = new Vec2(0,0);
    this.mouseJoint.GetAnchorB(v2);
    // Convert them to screen coordinates
    v1 = translateToPixels(v1);
    v2 = translateToPixels(v2);
    // And just draw a line
    stroke(0);
    strokeWeight(1);
    line(v1.x,v1.y,v2.x,v2.y);
  }
}


// This is the key function where
// we attach the spring to an x,y location
// and the Box object's location
Spring.prototype.bind = function(x,y,box) {
  // Define the joint
  var md = new MouseJointDef();
  // Body A is just a fake ground body for simplicity (there isn't anything at the mouse)
  md.bodyA = world.GetGroundBody();
  // Body 2 is the box's boxy
  md.bodyB = box.body;
  // Get the mouse location in world coordinates
  var mp = translateToWorld(x,y);
  // And that's the target
  md.target.Set(mp);
  // Some stuff about how strong and bouncy the spring should be
  md.maxForce = 1000.0 * box.body.m_mass;
  md.frequencyHz = 5.0;
  md.dampingRatio = 0.9;

  // Make the joint!
  this.mouseJoint = world.CreateJoint(md);
}

Spring.prototype.destroy = function() {
  // We can get rid of the joint when the mouse is released
  if (this.mouseJoint != null) {
    world.DestroyJoint(this.mouseJoint);
    this.mouseJoint = null;
  }
}




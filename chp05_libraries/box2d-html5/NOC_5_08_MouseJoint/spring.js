// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Class to describe the spring joint (displayed as a line)

// Constructor
class Spring {
  constructor(x, y) {
    // At first it doesn't exist
    this.mouseJoint = null;
  }

  // If it exists we set its target to the mouse location
  update(x, y) {
    if (this.mouseJoint !== null) {
      // Always convert to world coordinates!
      let mouseWorld = scaleToWorld(x, y);
      this.mouseJoint.SetTarget(mouseWorld);
    }
  }

  display() {
    if (this.mouseJoint !== null) {

      let posA = this.mouseJoint.GetAnchorA();
      let posB = this.mouseJoint.GetAnchorB();

      // We can get the two anchor points
      let v1 = scaleToPixels(posA.x, posA.y);
      let v2 = scaleToPixels(posB.x, posB.y);
      // And just draw a line
      stroke(200);
      strokeWeight(2);

      line(v1.x, v1.y, v2.x, v2.y);
    }
  }

  // This is the key function where
  // we attach the spring to an x,y location
  // and the Box object's location
  bind(x, y, box) {
    // Define the joint
    let md = new box2d.b2MouseJointDef();
    // Body A is just a fake ground body for simplicity (there isn't anything at the mouse)
    md.bodyA = world.CreateBody(new box2d.b2BodyDef()); //world.GetGroundBody();
    // Body 2 is the box's boxy
    md.bodyB = box.body;
    // Get the mouse location in world coordinates
    let mp = scaleToWorld(x, y);
    // And that's the target
    //println(mp.x + " " + mp.y);
    md.target = mp;
    //println(md.target.x + " " + md.target.y);

    // Some stuff about how strong and bouncy the spring should be
    md.maxForce = 1000.0 * box.body.m_mass;
    md.frequencyHz = 5.0;
    md.dampingRatio = 0.9;

    // Make the joint!
    this.mouseJoint = world.CreateJoint(md);
  }

  destroy() {
    // We can get rid of the joint when the mouse is released
    if (this.mouseJoint !== null) {
      world.DestroyJoint(this.mouseJoint);
      this.mouseJoint = null;
    }
  }
}
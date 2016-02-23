// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Two particles connected with distance joints

// Constructor
function Windmill(x,y) {
  this.len = 32;

  this.box1 = new Box(x, y-20, 120, 10, false);
  this.box2 = new Box(x, y, 10, 40, true);

  // Define joint as between two bodies
  var rjd = new box2d.b2RevoluteJointDef();

  rjd.Initialize(this.box1.body, this.box2.body, this.box1.body.GetWorldCenter());

  // Turning on a motor (optional)
  rjd.motorSpeed = PI*2;       // how fast?
  rjd.maxMotorTorque = 1000.0; // how powerful?
  rjd.enableMotor = false;      // is it on?

  // There are many other properties you can set for a Revolute joint
  // For example, you can limit its angle between a minimum and a maximum
  // See box2d manual for more

  // Create the joint
    joint = world.CreateJoint(rjd);

  this.display = function() {
    this.box2.display();
    this.box1.display();

    // Draw anchor just for debug
    var anchor = scaleToPixels(this.box1.body.GetWorldCenter());
    fill(0);
    noStroke();
    ellipse(anchor.x, anchor.y, 8, 8);
  };

  // Turn the motor on or off
  this.toggleMotor = function() {
    joint.EnableMotor(!joint.IsMotorEnabled());
  };

  this.motorOn = function() {
    return joint.IsMotorEnabled();
  };
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Two particles connected with distance joints

// Constructor
function Pair(x,y) {
  this.len = 32;

  this.p1 = new Particle(x,y);
  this.p2 = new Particle(x+random(-1,1),y+random(-1,1));

  var djd = new box2d.b2DistanceJointDef();
  // Connection between previous particle and this one
  djd.bodyA = this.p1.body;
  djd.bodyB = this.p2.body;
  // Equilibrium length
  djd.length = scaleToWorld(this.len);

  // These properties affect how springy the joint is
  djd.frequencyHz = 3;  // Try a value less than 5 (0 for no elasticity)
  djd.dampingRatio = 0.1; // Ranges between 0 and 1 (1 for no springiness)

  // Make the joint.  Note we aren't storing a reference to the joint ourselves anywhere!
  // We might need to someday, but for now it's ok
  var dj = world.CreateJoint(djd);

  this.done = function() {
    return this.p1.done() && this.p2.done();
  };

  this.display = function() {
    // Get the body's position
    var pos1 = scaleToPixels(this.p1.body.GetPosition());
    var pos2 = scaleToPixels(this.p2.body.GetPosition());

    stroke(200);
    strokeWeight(2);
    line(pos1.x,pos1.y,pos2.x,pos2.y);

    this.p1.display();
    this.p2.display();
  };
}

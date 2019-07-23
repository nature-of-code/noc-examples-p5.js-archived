// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
class Box {
  constructor(x, y) {
    this.w = 24;
    this.h = 24;

    // Define a body
    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    // Define a fixture
    let fd = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd.shape = new box2d.b2PolygonShape();
    fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

    // Some physics
    fd.density = 1.0;
    fd.friction = 0.5;
    fd.restitution = 0.2;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd);

    // Some additional stuff
    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));
  }

  contains(x, y) {
    let worldPoint = scaleToWorld(x, y);
    let f = this.body.GetFixtureList();
    let inside = f.TestPoint(worldPoint);
    return inside;
  }

  // Drawing the box
  display() {
    // Get the body's position
    let pos = scaleToPixels(this.body.GetPosition());
    // Get its angle of rotation
    let a = this.body.GetAngleRadians();

    // Draw it!
    rectMode(CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(a);
    fill(127);
    stroke(200);
    strokeWeight(2);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
class Lollipop {
  constructor(x, y) {
    this.w = 8;
    this.h = 24;
    this.r = 8;

    // Define a body
    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    // Define fixture #1
    let fd1 = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd1.shape = new box2d.b2PolygonShape();
    fd1.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));
    fd1.density = 1.0;
    fd1.friction = 0.5;
    fd1.restitution = 0.2;

    // Define fixture #2
    let fd2 = new box2d.b2FixtureDef();
    fd2.shape = new box2d.b2CircleShape();
    fd2.shape.m_radius = scaleToWorld(this.r);
    let offset = scaleToWorld(new box2d.b2Vec2(0, -this.h / 2));
    fd2.shape.m_p = new box2d.b2Vec2(offset.x, offset.y);
    fd2.density = 1.0;
    fd2.friction = 0.5;
    fd2.restitution = 0.2;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd1);
    this.body.CreateFixture(fd2);

    // Some additional stuff
    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));
  }

  // This function removes the particle from the box2d world
  killBody() {
    world.DestroyBody(this.body);
  }

  // Is the particle ready for deletion?
  done() {
    // Let's find the screen position of the particle
    let pos = scaleToPixels(this.body.GetPosition());
    // Is it off the bottom of the screen?
    if (pos.y > height + this.w * this.h) {
      this.killBody();
      return true;
    }
    return false;
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
    ellipse(0, -this.h / 2, this.r * 2, this.r * 2);
    pop();
  }
}
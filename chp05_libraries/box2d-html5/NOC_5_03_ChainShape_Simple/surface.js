// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

// An uneven surface boundary

class Surface {
  constructor() {
    this.surface = [];
    // Here we keep track of the screen coordinates of the chain
    this.surface.push(new box2d.b2Vec2(0, height / 2));
    this.surface.push(new box2d.b2Vec2(width / 2, height / 2 + 50));
    this.surface.push(new box2d.b2Vec2(width, height / 2));

    for (let i = 0; i < this.surface.length; i++) {
      this.surface[i] = scaleToWorld(this.surface[i]);
    }

    // This is what box2d uses to put the surface in its world
    let chain = new box2d.b2ChainShape();
    chain.CreateChain(this.surface, this.surface.length);

    // Need a body to attach shape!
    let bd = new box2d.b2BodyDef();
    this.body = world.CreateBody(bd);

    // Define a fixture
    let fd = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd.shape = chain;

    // Some physics
    fd.density = 1.0;
    fd.friction = 0.1;
    fd.restitution = 0.3;

    // Attach the fixture
    this.body.CreateFixture(fd);
  }

  // A simple function to just draw the edge chain as a series of vertex points
  display() {
    strokeWeight(1);
    stroke(200);
    fill(200);
    beginShape();
    for (let i = 0; i < this.surface.length; i++) {
      let v = scaleToPixels(this.surface[i]);
      vertex(v.x, v.y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }
}
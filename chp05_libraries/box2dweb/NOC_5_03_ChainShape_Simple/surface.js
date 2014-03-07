// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

// An uneven surface boundary

function Surface() {
  this.surface = [];
  // Here we keep track of the screen coordinates of the chain
  this.surface.push(new Vec2(0, height/2));
  this.surface.push(new Vec2(width/2, height/2+50));
  this.surface.push(new Vec2(width, height/2));

  // This is what box2d uses to put the surface in its world
  var chain = new ChainShape();

  // We can add 3 vertices by making an array of 3 Vec2 objects
  chain.vertices = [];

  chain.isALoop = false;
  chain.vertexCount = this.surface.length;
  for (var i = 0; i < this.surface.length; i++) {
    chain.vertices[i] = translateToWorld(this.surface[i]);
  }

  //chain.CreateChain(vertices, vertices.length);
  
  // Need a body to attach shape!
  var bd = new BodyDef();
  //var body = world.CreateBody(bd);
  //body.CreateFixture(chain,1);

  // Define a fixture
  var fd = new FixtureDef();
  // Fixture holds shape
  fd.shape = chain;
  
  // Some physics
  fd.density = 1.0;
  fd.friction = 0.1;
  fd.restitution = 0.3;

  // Create the body
  this.body = world.CreateBody(bd);

  // SAD THIS IS NOT YET IMPLEMENTED IN BOX2DWEB, see: https://groups.google.com/forum/#!topic/box2dweb/trFvD__gvpo
  // Attach the fixture
  //this.body.CreateFixture(fd);
}

// A simple function to just draw the edge chain as a series of vertex points
Surface.prototype.display = function() {
  strokeWeight(1);
  stroke(200);
  fill(200);
  beginShape();
  for (var i = 0; i < this.surface.length; i++) {
    vertex(this.surface[i].x, this.surface[i].y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}


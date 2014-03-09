// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

// An uneven surface boundary

// http://stackoverflow.com/questions/12792486/emscripten-bindings-how-to-create-an-accessible-c-c-array-from-javascript
function createChainShape(vertices, closedLoop) {
    var shape = new Box2D.b2ChainShape();            
    var buffer = Box2D.allocate(vertices.length * 8, 'float', Box2D.ALLOC_STACK);
    var offset = 0;
    for (var i=0;i<vertices.length;i++) {
        Box2D.setValue(buffer+(offset), vertices[i].get_x(), 'float'); // x
        Box2D.setValue(buffer+(offset+4), vertices[i].get_y(), 'float'); // y
        offset += 8;
    }            
    var ptr_wrapped = Box2D.wrapPointer(buffer, Box2D.b2Vec2);
    if ( closedLoop )
        shape.CreateLoop(ptr_wrapped, vertices.length);
    else
        shape.CreateChain(ptr_wrapped, vertices.length);
    return shape;
}


function Surface() {
  this.surface = [];
  // Here we keep track of the screen coordinates of the chain
  this.surface.push(new Vec2(0, height/2));
  this.surface.push(new Vec2(width/2, height/2+50));
  this.surface.push(new Vec2(width, height/2));


  var vertices = [];

  for (var i = 0; i < this.surface.length; i++) {
    vertices[i] = translateToWorld(this.surface[i]);
  }

  // This is what box2d uses to put the surface in its world
  var chain = createChainShape(vertices,false);

  // Define a fixture
  //var fd = new FixtureDef();
  // Fixture holds shape
  //fd.set_shape(chain);
  
  // Some physics
  //fd.set_density(1.0);
  //fd.set_friction(0.5);
  //fd.set_restitution(0.2);
 
  // Create the body
  this.body = world.CreateBody(bd);
  this.body.CreateFixture(chain,0.0);  
  println(this.body);

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
    vertex(this.surface[i].get_x(), this.surface[i].get_y());
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}


// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Making it easier to use all these classes
var VerletPhysics2D = toxi.physics2d.VerletPhysics2D;
var GravityBehavior = toxi.physics2d.behaviors.GravityBehavior;
var AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior;
var VerletParticle2D = toxi.physics2d.VerletParticle2D;
var VerletSpring2D = toxi.physics2d.VerletSpring2D;
var VerletMinDistanceSpring2D = toxi.physics2d.VerletMinDistanceSpring2D;
var Vec2D = toxi.geom.Vec2D;
var Rect =toxi.geom.Rect;


// Reference to physics world
var physics;

var p1;
var p2;

function setup() {
  createGraphics(640,360);

  // Initialize the physics
  physics=new VerletPhysics2D();
  physics.addBehavior(new GravityBehavior(new Vec2D(0,0.5)));

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));
  
  // Make two particles
  p1 = new Particle(new Vec2D(width/2,20));
  p2 = new Particle(new Vec2D(width/2+160,20));
  // Lock one in place
  p1.lock();

  // Make a spring connecting both Particles
  var spring=new VerletSpring2D(p1,p2,160,0.01);

  // Anything we make, we have to add into the physics world
  physics.addParticle(p1);
  physics.addParticle(p2);
  physics.addSpring(spring);
}

function draw() {

  // Update the physics world
  physics.update();

  background(51);

  // Draw a line between the particles
  stroke(200);
  strokeWeight(2);
  line(p1.x,p1.y,p2.x,p2.y);

  // Display the particles
  p1.display();
  p2.display();

  // Move the second one according to the mouse
  if (isMousePressed()) {
    p2.lock();
    p2.x = mouseX;
    p2.y = mouseY;
    p2.unlock();
  } 
}





// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size 
// list of particles.

// an array of ParticleSystems
var systems = [];

function setup() {
<<<<<<< HEAD
=======
  var text = createHTML("click to add particle systems");
  text.position(10,365);

>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
  createGraphics(640,360);
}

function draw() {
  background(51);  
  for(var i=0; i<systems.length; i++){
  	systems[i].addParticle();
  	systems[i].run();
<<<<<<< HEAD
  }

  fill(151);
  stroke(151);
  strokeWeight(1);
  textSize(16);
  text("click to add particle systems",10,height-30);
  
=======
  }  
>>>>>>> 0be8fadae337a89d219e11c55dc6b32982409493
}

function mousePressed() {
  systems.push(new ParticleSystem(1, new PVector(mouseX,mouseY)));
}
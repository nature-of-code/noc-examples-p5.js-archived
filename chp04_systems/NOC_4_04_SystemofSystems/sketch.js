// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size 
// list of particles.

//an array of ParticleSystems
var systems = [];

function setup() {
  createGraphics(640,360);
}

function draw() {
  background(255);  
  for(var i=0; i<systems.length; i++){
  	systems[i].addParticle();
  	systems[i].run();
  }

  fill(0);
  text("press space to add particle systems at mouse position",10,height-30);
  
}

function keyPressed() {
	if(key === ' '){
		systems.push(new ParticleSystem(1, new PVector(mouseX,mouseY)));
	}
	
}
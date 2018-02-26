// The Nature of Code
// http://natureofcode.com

// Blob Example
// Example 5.13 adapted by Zach Lieberman

let physics;

let particles = [];
let springs = [];
let attractor;

function setup() {
  createCanvas(500, 500);

  // Initialize the physics
  physics = new VerletPhysics2D();
  physics.setDrag(0.03);

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(new Vec2D(random(width), random(height)), 4, 80, -1));
  }

  attractor = new Particle(new Vec2D(width / 2, height / 2), 100, width * 10, 0.3);
  attractor.lock();
  //attractor.set(450, 450);


  for (let i = 0; i < 50; i++) {
    let spring1 = new VerletSpring2D(particles[i], particles[(i + 1) % particles.length], 5, 0.01);
    springs.push(spring1);
    physics.addSpring(spring1);
    if (i % 5 == 0) {
      let spring2 = new VerletSpring2D(particles[i], particles[(i + 25) % particles.length], 400, 0.001);
      springs.push(spring2);
      physics.addSpring(spring2);
    }
    if ((i + 5) % 10 == 0) {
      let spring2 = new VerletSpring2D(particles[i], attractor, 200, 0.001);
      springs.push(spring2);
      physics.addSpring(spring2);
    }

  }


}

function draw() {

  seconds = millis() / 1000;
  // Update the physics world
  physics.update();

  background(51);

  //attractor.display();
  stroke(255);
  fill(255, 20);
  beginShape();
  for (let i = 0; i < particles.length; i++) {
    //particles[i].display();
    vertex(particles[i].x, particles[i].y);

    // this doesn't work the way I expect !!  I'd like to be able to change the repulsion radius over time....
    particles[i].behavior.radius = 130 + 80 * sin(seconds + i / 30.0);
    particles[i].behavior.radiusSquared = particles[i].behavior.radius * particles[i].behavior.radius;
  }
  endShape(CLOSE);

  for (let i = 0; i < springs.length; i++) {
    stroke(0, 50);
    line(springs[i].a.x, springs[i].a.y, springs[i].b.x, springs[i].b.y);
  }



}
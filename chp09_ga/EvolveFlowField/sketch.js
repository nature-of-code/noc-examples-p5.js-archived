  // The Nature of Code
  // Daniel Shiffman
  // http://natureofcode.com

  // Pathfinding Flowfield w/ Genetic Algorithms

  // This example produces an obstacle course with a start and finish
  // Virtual "creatures" are rewarded for making it closer to the finish

  // Each creature's DNA is a "flowfield" of PVectors that
  // determine steering vectors for each cell on the screen

  let gridscale = 10; // Scale of grid is 1/24 of screen size

  // DNA needs one vector for every spot on the grid
  // (it's like a pixel array, but with vectors instead of colors)
  let dnasize;

  let lifetime; // How long should each generation live


  let population; // Population
  let lifecycle; // Timer for cycle of generation
  let recordtime; // Fastest time to target
  let target; // Target position
  let start; // Start position
  let diam = 24; // Size of target

  let obstacles; //an array list to keep track of all the obstacles!

  let debug = false;

  let newObstacle = null;

  let info;

  function setup() {
    createCanvas(640, 360);
    info = createP('');
    dnasize = floor(width / gridscale) * floor(height / gridscale);
    lifetime = width / 3;

    // Initialize let iables
    lifecycle = 0;
    recordtime = lifetime;
    target = new Obstacle(width - diam - diam / 2, height / 2 - diam / 2, diam, diam);
    start = new Obstacle(diam / 2, height / 2 - diam / 2, diam, diam);

    // Create a population with a mutation rate, and population max
    let popmax = 500;
    let mutationRate = 0.02;
    population = new Population(mutationRate, popmax);

    // Create the obstacle course
    obstacles = [];

    // obstacles.push(new Obstacle(width/4,80,10,height-160));
    // obstacles.push(new Obstacle(width/2,0,10,height/2-20));
    // obstacles.push(new Obstacle(width/2,height-height/2+20,10,height/2-20));
    // obstacles.push(new Obstacle(2*width/3,height/2-height/8,10,height/4));
  }

  function draw() {
    background(210);

    // Draw the target positions
    target.display();

    // Draw the obstacles
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].display();
    }


    // If the generation hasn't ended yet
    if (lifecycle < lifetime) {
      population.live(obstacles);
      if ((population.targetReached()) && (lifecycle < recordtime)) {
        recordtime = lifecycle;
      }
      lifecycle++;
      // Otherwise a new generation
    } else {
      lifecycle = 0;
      population.calcFitness();
      population.naturalSelection();
      population.generate();
    }

    // Display some info
    if (newObstacle !== null) {
      newObstacle.display();
    }

    info.html("Generation #: " + floor(population.getGenerations()) +
      "<br/>Cycles left: " + floor(lifetime - lifecycle) +
      "<br/>Record cycles: " + floor(recordtime));

  }

  function keyPressed() {
    console.log(key);
    if (key === 'd' || key === 'D') {
      debug = !debug;
    }
  }

  function mousePressed() {
    newObstacle = new Obstacle(mouseX, mouseY, 0, 0);
  }

  function mouseDragged() {
    newObstacle.w = mouseX - newObstacle.position.x;
    newObstacle.h = mouseY - newObstacle.position.y;

  }

  function mouseReleased() {
    obstacles.push(newObstacle);
    newObstacle = null;
  }